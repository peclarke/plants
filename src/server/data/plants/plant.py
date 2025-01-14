from datetime import datetime, timedelta
from data.constants import TBL_PLANTS, TBL_USERS, TBL_PLANT_TYPES, TBL_PLANT_CARE_PROFILE
from data.plants.plantCareProfile import PlantCareProfile
from data.activity.activities import Activity
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

import data.DB as DB

"""
Personal Plant Model for SQLALchemy
"""
class Plant(DB.BASE):
    __tablename__ = TBL_PLANTS
    id = Column(Integer, primary_key=True, autoincrement=True)
    plantName = Column('plantName', String(255), nullable=False)
    plantDesc = Column('plantDesc', String(255), nullable=False)

    plantTypeId = Column("plantTypeId", Integer, ForeignKey(f"{TBL_PLANT_TYPES}.id", name=f"fk_plant_type_id_{__tablename__}"), nullable=False)
    plantType = relationship("PlantType", back_populates="plants", uselist=False)

    userId = Column(Integer, ForeignKey(f"{TBL_USERS}.id", name=f"fk_user_id_{__tablename__}"), nullable=False)
    user = relationship("User", back_populates='userPlants')

    careProfileId = Column("careProfileId", Integer, ForeignKey(f"{TBL_PLANT_CARE_PROFILE}.id", name=f"fk_plant_care_profile_id_{__tablename__}"), nullable=False)
    careProfile = relationship("PlantCareProfile", uselist=False, backref="plant_care_profile")

    # individual relationships
    activities = relationship("Activity", back_populates='plant', cascade='all,delete')
    # tags = relationship("PlantTag", back_populates="plant") # access through plantType

    photos = relationship("Photo", back_populates="plant")

    posts = relationship("PostPlant", back_populates='plant')

    def get_serialized_photos(self):
        allPhotos = {p.photoTime.isoformat():p.uri for p in self.photos}
        return allPhotos

    def __init__(self, plantName, plantDesc, plantTypeId, userId, careProfileId):
        self.plantName = plantName
        self.plantDesc = plantDesc
        self.plantTypeId = plantTypeId
        self.userId = userId
        self.careProfileId = careProfileId

    def get_serialized_activities(self):
        allActivities = [activity.serialize() for activity in self.activities]
        return allActivities

    def get_serialized_tags(self):
        allTags = [tag.serialize() for tag in self.tags]
        return allTags
    
    def last_watered(self, session):
        most_recent_watering: Activity = session.query(Activity) \
            .filter(Activity.activityTypeId == 1) \
            .filter(Activity.plantId == self.id) \
            .order_by(Activity.activityTime.desc()) \
            .first()
                
        if most_recent_watering is None:
            return False
        else:
            return most_recent_watering.serialize()

    def needs_watering(self, session):
        # Watering's activitytype id is 1 in the database
        most_recent_watering: Activity = session.query(Activity) \
            .filter(Activity.activityTypeId == 1) \
            .filter(Activity.plantId == self.id) \
            .order_by(Activity.activityTime.desc()) \
            .first()
        
        if most_recent_watering is None:
            return True

        care: PlantCareProfile = self.careProfile
        target_watering_time: int = care.daysBetweenWatering
        delta: timedelta = datetime.now() - most_recent_watering.activityTime
        days_since_water: int = delta.days

        return days_since_water >= target_watering_time
    
    def serialize(self, session="*"):
        return {
            "id":              self.id,
            "name":            self.plantName,
            "common_name":     self.plantType.commonName,
            "scientific_name": self.plantType.fullName,
            "description":     self.plantDesc,
            "plantTypeId":     self.plantTypeId,
            "user":            self.user.snip_serialize(),
            "activities":      self.get_serialized_activities(),
            "careProfile":     self.careProfile.serialize(),
            "tags":            self.plantType.get_serialized_tags(),
            "photos":          self.get_serialized_photos(),
            "needsWatering":   self.needs_watering(session) if session != "*" else False,
            "lastWatered":     self.last_watered(session) if session != "*" else False
        }

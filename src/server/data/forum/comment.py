from data.constants import TBL_USERS, TBL_POSTS, TBL_COMMENTS
from data.plants.plantCareProfile import PlantCareProfile
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship, backref
from sqlalchemy.sql import func

from flask import jsonify   
import json

import data.DB as DB

"""
Forum Comment Model for SQLALchemy
"""
class Comment(DB.BASE):
    __tablename__ = TBL_COMMENTS
    id = Column(Integer, primary_key=True, autoincrement=True)
    content = Column('content', String(255), nullable=False)
    created = Column("created", DateTime(timezone=True), server_default=func.now())

    parentId = Column(Integer, ForeignKey(f"{TBL_COMMENTS}.id", name=f"fk_parent_{__tablename__}"), nullable=True)
    # parent = relationship("Comment", back_populates="replies", remote_side=[id])
    replies = relationship("Comment", backref=backref("parent", remote_side=[id]), uselist=True)

    userId = Column(Integer, ForeignKey(f"{TBL_USERS}.id", name=f"fk_user_id_{__tablename__}"), nullable=False)
    author = relationship("User", back_populates='userComments')

    postId = Column(Integer, ForeignKey(f"{TBL_POSTS}.id", name=f"fk_post_id_{__tablename__}"), nullable=False)
    post = relationship("Post", back_populates="comments")

    score = Column("score", Integer, nullable=False)


    def __init__(self, content, userId, postId, parentId):

        self.content = content
        self.created = func.now()
        self.userId = userId
        self.parentId = parentId # the parent id will be None
        self.postId = postId
        self.score = 0

    def serialize_replies(self):
        allReplies = [reply.serialize() for reply in self.replies]
        return allReplies


    def serialize(self):
        return {
            "id":              self.id,
            "score":           self.score,
            "content":         self.content,
            "created":         self.created.isoformat(),
            "parentId":        self.parentId,
            "userId":          self.userId,
            "replies":         self.serialize_replies()
        }

    # will need to add more methods here for getting info and setting info of the user
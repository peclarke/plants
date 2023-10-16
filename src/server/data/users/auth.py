from typing import List
from flask import jsonify
from data.constants import TBL_AUTH, TBL_USERS
from data.plants import Plant, PlantType
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, UniqueConstraint
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

import data.DB as DB
import bcrypt

"""
Auth Model for SQLALchemy
"""
class Auth(DB.BASE):
    __tablename__ = TBL_AUTH
    id = Column(Integer, primary_key=True)
    username = Column('username', String(255), nullable=False)
    password = Column('password', String(255), nullable=False)
    UniqueConstraint(username, name='UNQIUE-authuser')

    # relationships
    # authUser = relationship("User", back_populates="auth")

    def __init__(self, username, password) -> None:
        self.username = username
        self.password = hash_password(password)

    def check_password_match(self, password: str) -> bool:
        usrbytes = password.encode('utf-8')
        return bcrypt.checkpw(usrbytes, self.password.encode('utf-8'))
    
    def serialize(self):
        return {
            "usr": self.username,
            "psw": self.password
        }
    

def hash_password(password: str) -> bytes:
    bytes = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hash = bcrypt.hashpw(bytes, salt)
    return hash
    
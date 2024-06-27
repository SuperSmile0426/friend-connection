from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    status = Column(String, default="Hey there! I am using Friend Connection.")

    friends = relationship("Friend", foreign_keys='Friend.user_id', back_populates="owner")

class Friend(Base):
    __tablename__ = 'friends'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    friend_id = Column(Integer, ForeignKey('users.id'))
    accepted = Column(Boolean, default=False)

    owner = relationship("User", foreign_keys=[user_id], back_populates="friends")
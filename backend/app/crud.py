from sqlalchemy.orm import Session
from . import models, schemas

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(username=user.username, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_friend_request(db: Session, friend: schemas.FriendCreate):
    db_friend = models.Friend(user_id=friend.user_id, friend_id=friend.friend_id)
    db.add(db_friend)
    db.commit()
    db.refresh(db_friend)
    return db_friend

def get_friend_requests(db: Session, user_id: int):
    return db.query(models.Friend).filter(models.Friend.friend_id == user_id, models.Friend.accepted == False).all()

def update_friend_request(db: Session, friend_id: int, accepted: bool):
    db_friend = db.query(models.Friend).filter(models.Friend.id == friend_id).first()
    db_friend.accepted = accepted
    db.commit()
    db.refresh(db_friend)
    return db_friend
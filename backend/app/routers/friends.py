from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.orm import Session
from .. import crud, models, schemas
from ..database import SessionLocal, engine
from pydantic import BaseModel

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/friends/", response_model=schemas.Friend)
def create_friend_request(friend: schemas.FriendCreate, db: Session = Depends(get_db)):
    return crud.create_friend_request(db=db, friend=friend)

@router.get("/friends/requests/{user_id}", response_model=list[schemas.Friend])
def get_friend_requests(user_id: int, db: Session = Depends(get_db)):
    return crud.get_friend_requests(db=db, user_id=user_id)

class Item(BaseModel):
    accepted: bool

@router.put("/friends/{friend_id}", response_model=schemas.Friend)
def update_friend_request(friend_id: int, accepted: Item, db: Session = Depends(get_db)):   
    return crud.update_friend_request(db=db, friend_id=friend_id, accepted=accepted.accepted)
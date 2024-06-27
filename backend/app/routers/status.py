from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from uuid import uuid4

app = FastAPI()

statuses = []

class Status(BaseModel):
    id: str
    user_id: int
    content: str

@app.post("/status", response_model=Status)
def create_status(status: Status):
    status.id = str(uuid4())
    statuses.append(status.dict())
    return status

@app.get("/status", response_model=List[Status])
def get_statuses():
    return statuses

@app.get("/status/{user_id}", response_model=List[Status])
def get_status_by_user(user_id: int):
    user_statuses = [status for status in statuses if status['user_id'] == user_id]
    if not user_statuses:
        raise HTTPException(status_code=404, detail="Statuses not found")
    return user_statuses
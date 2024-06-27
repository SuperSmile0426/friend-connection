from fastapi import FastAPI
from app.routers import users, friends
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(users.router, prefix="/api/v1", tags=["users"])
app.include_router(friends.router, prefix="/api/v1", tags=["friends"])
# backend/schemas.py
from pydantic import BaseModel, EmailStr
from db import UserRole # Import the Enum from db.py

# --- Pydantic Schemas (Data Validation) ---

class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: UserRole

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class UserPublic(BaseModel):
    id: int
    name: str
    email: str
    role: UserRole
    class Config:
        from_attributes = True

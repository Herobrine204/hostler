from pydantic import BaseModel, EmailStr

# We use Pydantic for INPUT validation.
# This ensures the data coming from the frontend is correct.

# ⬇️ CHECK THIS CLASS CAREFULLY ⬇️
# It must be spelled 'StudentCreateSchema'
class StudentCreateSchema(BaseModel):
    name: str
    email: EmailStr  # Pydantic will auto-validate this is a valid email
    phone: str | None = None

class RoomCreateSchema(BaseModel):
    room_number: str
    capacity: int

class AssignRoomSchema(BaseModel):
    student_id: int
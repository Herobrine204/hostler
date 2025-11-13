from flask import Blueprint, request, jsonify
from pydantic import ValidationError
from app import db
from app.models import Student, Room, MessBill
from app.schemas import StudentCreateSchema, RoomCreateSchema, AssignRoomSchema

api_bp = Blueprint('api', __name__)

# --- Room Routes (No Change) ---

@api_bp.route('/rooms', methods=['POST'])
def create_room():
    try:
        data = RoomCreateSchema(**request.json)
    except ValidationError as e:
        return jsonify({"error": e.errors()}), 400
    if db.session.scalar(db.select(Room).where(Room.room_number == data.room_number)):
        return jsonify({"error": "Room number already exists"}), 409
    new_room = Room(room_number=data.room_number, capacity=data.capacity)
    db.session.add(new_room)
    db.session.commit()
    return jsonify(new_room.to_dict()), 201

@api_bp.route('/rooms', methods=['GET'])
def get_rooms():
    rooms = db.session.scalars(db.select(Room)).all()
    return jsonify([room.to_dict() for room in rooms])

@api_bp.route('/rooms/<int:room_id>', methods=['GET'])
def get_room(room_id):
    room = db.session.get(Room, room_id)
    if not room:
        return jsonify({"error": "Room not found"}), 404
    room_data = room.to_dict()
    students_in_room = db.session.scalars(db.select(Student).where(Student.room_id == room_id)).all()
    room_data['students'] = [student.to_dict() for student in students_in_room]
    return jsonify(room_data)

# --- Student Routes (No Change) ---

@api_bp.route('/students', methods=['POST'])
def create_student():
    try:
        data = StudentCreateSchema(**request.json)
    except ValidationError as e:
        return jsonify({"error": e.errors()}), 400
    if db.session.scalar(db.select(Student).where(Student.email == data.email)):
        return jsonify({"error": "Email already in use"}), 409
    new_student = Student(name=data.name, email=data.email, phone=data.phone)
    db.session.add(new_student)
    db.session.commit()
    return jsonify(new_student.to_dict()), 201

@api_bp.route('/students', methods=['GET'])
def get_students():
    students = db.session.scalars(db.select(Student)).all()
    return jsonify([student.to_dict() for student in students])

@api_bp.route('/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    student = db.session.get(Student, student_id)
    if not student:
        return jsonify({"error": "Student not found"}), 404
    return jsonify(student.to_dict())

# --- Management Routes (No Change) ---

@api_bp.route('/rooms/<int:room_id>/assign', methods=['POST'])
def assign_student_to_room(room_id):
    room = db.session.get(Room, room_id)
    if not room:
        return jsonify({"error": "Room not found"}), 404
    try:
        data = AssignRoomSchema(**request.json)
    except ValidationError as e:
        return jsonify({"error": e.errors()}), 400
    student = db.session.get(Student, data.student_id)
    if not student:
        return jsonify({"error": "Student not found"}), 404
    if student.room_id:
        return jsonify({"error": "Student is already assigned to a room"}), 400
    if room.is_full:
        return jsonify({"error": "Room is full"}), 400
    student.room = room
    db.session.commit()
    return jsonify({"message": f"Student {student.name} assigned to room {room.room_number}"})

@api_bp.route('/students/<int:student_id>/unassign', methods=['POST'])
def unassign_student(student_id):
    student = db.session.get(Student, student_id)
    if not student:
        return jsonify({"error": "Student not found"}), 404
    if not student.room:
        return jsonify({"error": "Student is not assigned to any room"}), 400
    student.room_id = None
    db.session.commit()
    return jsonify({"message": f"Student {student.name} has been unassigned"})

# --- NEW API ROUTE ---
@api_bp.route('/students/<int:student_id>/mess-bills', methods=['GET'])
def get_student_mess_bills(student_id):
    student = db.session.get(Student, student_id)
    if not student:
        return jsonify({"error": "Student not found"}), 404
        
    bills = db.session.scalars(
        db.select(MessBill).where(MessBill.student_id == student_id)
    ).all()
    
    return jsonify([bill.to_dict() for bill in bills])
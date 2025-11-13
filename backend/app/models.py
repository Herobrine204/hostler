from app import db

# --- Room Model (No Change) ---
class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_number = db.Column(db.String(10), unique=True, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    students = db.relationship('Student', back_populates='room')

    @property
    def current_occupancy(self):
        return len(self.students)
    
    @property
    def is_full(self):
        return self.current_occupancy >= self.capacity

    def to_dict(self):
        return {
            "id": self.id,
            "room_number": self.room_number,
            "capacity": self.capacity,
            "current_occupancy": self.current_occupancy,
            "is_full": self.is_full,
            "student_ids": [student.id for student in self.students]
        }

# --- Student Model (Updated) ---
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'), nullable=True)
    room = db.relationship('Room', back_populates='students')
    
    # This 'relationship' connects Student to MessBill
    mess_bills = db.relationship('MessBill', back_populates='student')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "room_id": self.room_id
        }

# --- NEW MODEL ---
class MessBill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('student.id'), nullable=False)
    month = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), nullable=False, default='Due') # e.g., "Paid" or "Due"
    
    # This 'relationship' connects MessBill to Student
    student = db.relationship('Student', back_populates='mess_bills')
    
    def to_dict(self):
        return {
            "id": self.id,
            "student_id": self.student_id,
            "month": self.month,
            "amount": self.amount,
            "status": self.status
        }
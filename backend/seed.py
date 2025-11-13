from app import create_app, db
from app.models import Student, Room, MessBill

app = create_app()

with app.app_context():
    # --- Clear all existing data ---
    print("Deleting old data...")
    db.session.query(MessBill).delete() # Clear bills first
    db.session.query(Student).delete()
    db.session.query(Room).delete()
    
    # --- Create New Rooms ---
    print("Creating new rooms...")
    room101 = Room(room_number="101", capacity=3)
    room102 = Room(room_number="102", capacity=2)
    room201 = Room(room_number="201", capacity=4)
    room202 = Room(room_number="202", capacity=3)
    
    db.session.add_all([room101, room102, room201, room202])
    db.session.commit() # Commit rooms first

    # --- Create New Students and Assign them to Rooms ---
    print("Creating new students...")
    s1 = Student(name="Alice Smith", email="alice@example.com", room=room101)
    s2 = Student(name="Bob Johnson", email="bob@example.com", room=room101)
    s3 = Student(name="Charlie Brown", email="charlie@example.com", room=room102)
    s4 = Student(name="Diana Prince", email="diana@example.com", room=room201)
    s5 = Student(name="Eve Polastri", email="eve@example.com", room=room201)
    s6 = Student(name="Frank Castle", email="frank@example.com") # Unassigned

    db.session.add_all([s1, s2, s3, s4, s5, s6])
    db.session.commit() # Commit students to get their IDs

    # --- NEW: Create Mess Bills ---
    print("Creating mess bills...")
    bill1 = MessBill(student=s1, month="August", amount=2500, status="Paid")
    bill2 = MessBill(student=s1, month="September", amount=2500, status="Paid")
    bill3 = MessBill(student=s1, month="October", amount=2500, status="Due")
    
    bill4 = MessBill(student=s2, month="August", amount=2500, status="Paid")
    bill5 = MessBill(student=s2, month="September", amount=2500, status="Due")
    
    bill6 = MessBill(student=s3, month="October", amount=2200, status="Due")

    db.session.add_all([bill1, bill2, bill3, bill4, bill5, bill6])
    
    # --- Final Commit ---
    db.session.commit()
    print("Database has been seeded successfully with new data!")
import os

# Gets the absolute path of the directory this file is in
basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    # This is the one-line setup for SQLite.
    # It tells SQLAlchemy to create a file named 'hostel.db' 
    # right here in the 'backend' folder.
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'hostel.db')
    
    # This silences a warning
    SQLALCHEMY_TRACK_MODIFICATIONS = False
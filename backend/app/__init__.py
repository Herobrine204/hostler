from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config

# Create the database extension object
db = SQLAlchemy()

# ⬇️ MAKE SURE THIS LINE EXISTS AND IS SPELLED CORRECTLY ⬇️
def create_app(config_class=Config):
    # --- Application Factory ---
    app = Flask(__name__)
    app.config.from_object(config_class)

    # --- Initialize Extensions ---
    
    # Connect the 'db' object to our app
    db.init_app(app) 
    
    # Set up CORS. This allows your friend's Next.js app (on a different port)
    # to make requests to this backend.
    CORS(app) 

    # --- Register Blueprints ---
    # We import 'routes.py' here to avoid circular imports
    from app.routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    # --- Create Database Tables ---
    # This is a simple way to create all your tables
    # from your models.py file automatically.
    with app.app_context():
        db.create_all()

    return app
from app import create_app

# This is the main entry point to run our application
app = create_app()

if __name__ == '__main__':
    # debug=True will auto-reload the server when you save a file
    app.run(debug=True)
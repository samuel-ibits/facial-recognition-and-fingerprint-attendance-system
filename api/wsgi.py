# wsgi.py

import sys
path = '/home/your_username/path_to_your_project_directory'
if path not in sys.path:
    sys.path.insert(0, path)

from app import app as application  # Replace with your Flask app instance

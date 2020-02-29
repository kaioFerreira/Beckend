from flask_script import Manager
from flask import Flask

app = Flask(__name__)
app.config.from_object('config')

manager = Manager(app)

from app.controllers import default

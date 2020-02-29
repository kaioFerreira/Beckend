from app import app
from flask import render_template, flash, redirect

from app.models.tables import Usuario, Docente
from app.models.forms import LoginForm, CadForm

@app.route('/login', methods=['POST', 'GET', ])
def()
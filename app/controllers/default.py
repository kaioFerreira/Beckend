from app import app
from flask import render_template, flash, redirect


@app.route('/', methods=['POST', 'GET', ])
def login():
    return render_template(
            'login.html',
            css = 'cadastro_login.css',
            titulo = 'Me Avisa | Login',
        )
from flask_wtf import Form
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import DataRequired

class LoginForm(Form):
    usuario = StringField('usuario', validators=[DataRequired()])
    senha = PasswordField('senha', validators=[DataRequired()])

class CadForm(Form):
    usuario = StringField('nome')
    email = StringField('email')
    senha = PasswordField('senha')
    val_senha = PasswordField('val_senha')

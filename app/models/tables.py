from app import db

class Usuario(db.Model):
    __tablename__ = 'usuarios'

    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    senha = db.Column(db.String)

    def __init__(self, usuario, email, senha):
        self.usuario = usuario
        self.email = email
        self.senha = senha

    def __repr__(self):
        return '<Usuario %r>' % self.email

class Docente(db.Model):
    __tablename__ = 'docentes'

    id = db.Column(db.Integer, primary_key=True)
    nome= db.Column(db.String)

    def __init__(self, nome):
        self.nome = nome

    def __repr__(self):
        return self.nome

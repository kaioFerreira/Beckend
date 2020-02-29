from app import db
from bs4 import BeautifulSoup
from app.models.tables import Docente
import requests

url = 'http://professor.pucgoias.edu.br/SiteDocente/home/index.asp'

req = requests.get(url)

if req.status_code == 200:
    html = req.content

soup = BeautifulSoup(html, 'html.parser')

lst_docentes = soup.findAll('a', {'class': 'nomeProf'})

for docente in lst_docentes:
    d = Docente(docente.get_text())
    db.session.add(d)

db.session.commit()

# Author: "The Recyclists"
# Sari Parvillers, Emma Bösz, Ruben Dijksma, Angeline Palumbo

from flask import Flask, request, session, render_template, redirect
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///recyclists.db"

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

db = SQLAlchemy(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/map")
def map_page():
    return render_template("map.html")


@app.route("/places")
def places():
    return render_template("places.html")


@app.route("/learn_more")
def learn_more():
    return render_template("learn_more.html")


@app.route("/places/alexander")
def alexander():
    return render_template("/places/alexander.html")


@app.route("/places/centraal")
def centraal():
    return render_template("/places/centraal.html")


@app.route("/places/frans_halstraat")
def frans_halstraat():
    return render_template("/places/frans_halstraat.html")


@app.route("/places/gelderlandplein")
def gelderlandplein():
    return render_template("/places/gelderlandplein.html")


@app.route("/places/heemstedestraat")
def heemstedestraat():
    return render_template("/places/heemstedestraat.html")


@app.route("/places/lelylaan")
def lelylaan():
    return render_template("/places/lelylaan.html")


@app.route("/places/nesciobrug")
def nesciobrug():
    return render_template("/places/nesciobrug.html")


@app.route("/places/roeterseiland")
def roeterseiland():
    return render_template("/places/roeterseiland.html")


@app.route("/places/sint_antonies")
def sint_antonies():
    return render_template("/places/sint_antonies.html")


@app.route("/places/waterkersweg")
def waterkersweg():
    return render_template("/places/waterkersweg.html")

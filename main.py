# Author: "The Recyclists"
# Emma Bösz, Ruben Dijksma, Angeline Palumbo, Sari Parvillers

from flask import Flask, request, session, render_template, redirect
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
from sqlalchemy.sql import func
from sqlalchemy import select
import secrets
import csv

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///recyclists.db"

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(hours=1)
Session(app)

db = SQLAlchemy(app)


class PageView(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    visitor_id = db.Column(db.String(32))
    page = db.Column(db.String(255))
    time = db.Column(db.DateTime(timezone=True), server_default=func.now())


class ButtonClick(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    visitor_id = db.Column(db.String(32))


with app.app_context():
    db.create_all()


@app.before_request
def set_visitor_id():
    if "visitor_id" not in session:
        session["visitor_id"] = secrets.token_hex(32)


@app.before_request
def record_page_visit():
    if request.path == "/favicon.ico" or request.path.startswith("/static"):
        return
    page_view = PageView(
        visitor_id=session["visitor_id"],
        page=request.path,
    )
    db.session.add(page_view)
    db.session.commit()


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


@app.route("/button_clicked", methods=["POST"])
def record_button_click():
    button_click = ButtonClick(visitor_id=session["visitor_id"])
    db.session.add(button_click)
    db.session.commit()
    return ("", 204)


@app.cli.command("data")
def data():
    stmt = select(ButtonClick.visitor_id).distinct()

    button_clicks = {row[0] for row in db.session.execute(stmt)}

    stmt = select(
        PageView.visitor_id,
        func.julianday(func.max(PageView.time))
        - func.julianday(func.min(PageView.time)),
    ).group_by(PageView.visitor_id)

    with open("data.csv", "w") as f:
        writer = csv.DictWriter(
            f, fieldnames=["visitor_id", "visit_duration", "is_button_clicked"]
        )
        writer.writeheader()
        for row in db.session.execute(stmt):
            writer.writerow(
                {
                    "visitor_id": row[0],
                    "visit_duration": str(timedelta(days=row[1])),
                    "is_button_clicked": str(row[0] in button_clicks),
                }
            )


if __name__ == "__main__":
    app.run()

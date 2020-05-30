import os
from flask import Flask,render_template

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def index():
    return render_template("home.html")

@app.route("/portfolio")
def portfolio():
    return render_template("Portfolio.html")
    
@app.route("/resume")
def resume():
    return render_template("resume.html")
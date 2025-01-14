from flask import Blueprint, Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from endpoints import get_blueprints
from data.DB import CONNECTION_STRING, SESSION

# import firebase_admin
# import os
from data import User, Plant, PlantType

def create_app() -> Flask:
    app = Flask("plant_api")

    # setup app confg
    # app.config['key'] = value

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = CONNECTION_STRING #None #'sqlite:////tmp/test.db' # TODO, when uqcloud gets setup

    for blueprint in get_blueprints():
        app.register_blueprint(blueprint)

    db = SQLAlchemy(app)
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    # db.init_app(app)

    # Initialise firebase admin
    # dirname = os.path.dirname(__file__)
    # cred = firebase_admin.credentials.Certificate(os.path.join(dirname, "firebase_admin.json"))
    # fb_admin = firebase_admin.initialize_app(cred)

    return app

# Initial setup
app: Flask = create_app()
apiBP = Blueprint("api", __name__, url_prefix='/api')
# app.register_blueprint(apiBP, url_prefix='/api')

# app.config["APPLICATION_ROUTE"] = "/api"

# db: SQLAlchemy = SQLAlchemy(app)
# db.init_app(app)

@apiBP.route("/")
def root():
    return "Welcome to our friendly Plants API. Check the Docs!!!!!"

app.register_blueprint(apiBP)

if __name__ == "__main__":
    # session = SESSION()
    # admin = User(username='bobbithy', email='bob@example.com')
    # session.add(admin)
    # session.commit()

    # plantType = PlantType(type='tester',commonName='Testing Plant', fullName='Read Leafed Testing Plant')
    # plant = Plant(name="Desmond Jones", desc="My favourite potted plant", plantTypeId=1, userId=1)

    # session.add_all([plantType, plant])
    # session.commit()

    app.run(debug=False, port=3000, host="0.0.0.0")
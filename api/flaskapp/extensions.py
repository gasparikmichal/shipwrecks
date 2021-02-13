from flask_pymongo import PyMongo, MongoClient
from .settings import MONGO_URI

mongo = PyMongo()
client = MongoClient(MONGO_URI)
from flask import Blueprint, Response
from bson import json_util
from .extensions import client


main = Blueprint('main', __name__)


@main.route('/')
def index():
    results = json_util.dumps(
        client.get_database('sample_geospatial').get_collection('shipwrecks').find().limit(25)
    )
    return Response(
        results
    )


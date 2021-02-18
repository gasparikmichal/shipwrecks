from flask import Blueprint, Response
from bson import json_util
from .extensions import client


main = Blueprint('main', __name__)


@main.route('/wrecks')
def index():
    print(client.get_database('wrecks_app'))
    results = json_util.dumps(
        client.get_database('wrecks_app').get_collection('wrecks').find().limit(100)
    )
    return Response(
        results
    )


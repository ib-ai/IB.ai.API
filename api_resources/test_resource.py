import json

from flask_restful import Resource

from db import redis_client


class TestResource(Resource):

    @staticmethod
    def get():
        query_response = redis_client.get("Test").decode("utf-8")
        return {"Test response": query_response}

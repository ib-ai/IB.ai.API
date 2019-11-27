import json

from flask_restful import Resource

from db import redis_client

class TagsResource(Resource):

    @staticmethod
    def get(server_id):
        res = redis_client.hgetall("tags_" + server_id)
        data = []
        for k, v in res.items():
            obj = {k.decode("utf-8"): v.decode("utf-8")}
            data.append(obj)
        return {"tags": data}

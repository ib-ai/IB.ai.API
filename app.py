import os

from flask import Flask, send_from_directory
from flask_restful import Api

from db import redis_client
from api_resources.test_resource import TestResource

app = Flask(__name__, static_folder="front/dist/")
api = Api(app)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path != "" and os.path.exists(app.static_folder + "/" + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


api.add_resource(TestResource, "/api/test")

if __name__ == "__main__":
    redis_client.set("Test", "A value")
    app.run(
        host="0.0.0.0",
        port=6001,
        debug=True
    )

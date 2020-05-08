import os

from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS

from db import redis_client
from utils import string_to_boolean
from resources.test_resource import TestResource
from resources.tags_resource import TagsResource

app = Flask(__name__, static_folder="front/build/")
if string_to_boolean(os.environ['DEV']):
    CORS(app)
api = Api(app)

# Environment variables
debug_mode = string_to_boolean(os.environ['DEV'])

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path != "" and os.path.exists(app.static_folder + "/" + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


api.add_resource(TestResource, "/api/test")
api.add_resource(TagsResource, "/api/tags/<server_id>")

if __name__ == "__main__":
    redis_client.set("Test", "A value")
    app.run(
        host="0.0.0.0",
        port=3000,
        debug=debug_mode
    )

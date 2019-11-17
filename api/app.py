from flask import Flask
import redis
import urllib.request

app = Flask(__name__)
r = redis.Redis(host="db", port=6379, db=0)

@app.route('/')
def hello_world():
    return r.get("Test")


if __name__ == "__main__":
    r.set("Test", "A value")
    app.run(
        host="0.0.0.0",
        port=8080,
        debug=True
    )

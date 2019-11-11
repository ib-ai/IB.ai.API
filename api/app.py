from flask import Flask
import redis
import urllib.request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return urllib.request.urlopen("http://some_bot:9090/").read()


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8080,
        debug=True
    )

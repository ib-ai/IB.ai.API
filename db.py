import redis

host = os.environ['REDIS_HOST']
port = int(os.environ['REDIS_PORT'])
db = int(os.environ['REDIS_DB'])

redis_client = redis.Redis(host=host, port=port, db=db)

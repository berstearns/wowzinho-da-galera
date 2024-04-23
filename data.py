import redis

r = redis.Redis(
  host='redis-14934.c10.us-east-1-2.ec2.redns.redis-cloud.com',
  port=14934,
  password='NSM9oHrkYTUXuN6F4Aah63sxE9FlcApu')

print(r.get('20240419'))

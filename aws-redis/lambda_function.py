import redis



def lambda_handler(event, context):
    #print("Received event: " + json.dumps(event, indent=2))
    print("value1 = " + event['key1'])
    print("value2 = " + event['key2'])
    print("value3 = " + event['key3'])
    r = redis.Redis(
      host='redis-14934.c10.us-east-1-2.ec2.redns.redis-cloud.com',
      port=14934,
      password='NSM9oHrkYTUXuN6F4Aah63sxE9FlcApu'
    )
    
    return {
      'status': 200,
      'message': f'{r.get("20240419")}'
    }

var redis = require('redis')

const client = await redis.createClient({
    password: 'NSM9oHrkYTUXuN6F4Aah63sxE9FlcApu',
    socket: {
        host: 'redis-14934.c10.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 14934
    }
}).on('error', err => console.log(err) )
  .connect();


window.data = await client.get('20240419')
await client.disconnet()

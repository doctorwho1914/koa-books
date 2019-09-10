const config = require('../config');
const redis = require('async-redis');
const client = redis.createClient();

// echo redis errors to the console
client.on('error', (err) => {
    console.log("Redis Error " + err)
});

module.exports = class Cache {

    static async getOneKey(ctx, next){
        const redisKey = ctx.originalUrl;
        const data =  await client.get(redisKey);

        if (data) {
            return ctx.body = {
                source: 'cache',
                data: JSON.parse(data)
            }
        } else {
            await next();
        }
    }

    static async addOneKey(key, value) {
        await client.setex(key, config.cacheExpire, JSON.stringify(value));
    }
};

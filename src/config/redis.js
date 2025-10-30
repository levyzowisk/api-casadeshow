const ioRedis = require('ioredis');

const connection = new ioRedis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    maxRetriesPerRequest: null
});

module.exports = {
    connection
}
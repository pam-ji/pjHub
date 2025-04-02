
const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis',
  port: 6379,
  retryStrategy: (times) => {
    return Math.min(times * 50, 2000);
  }
});

module.exports = redis;

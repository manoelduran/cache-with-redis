import Redis, { Redis as RedisClient } from 'ioredis';

class cacheConfig {
    private redis: RedisClient
    constructor() {
        this.redis = new Redis({
            host: 'redis',
            port: 6379
        })
    }

    public async create(key: string, value: string): Promise<void> {
        await this.redis.set(key, JSON.stringify(value))
    }
    public async get<T>(key: string): Promise<T | null> {
      const response =  await this.redis.get(key)
      if(!response) {
        return null
      }
      const parsedData = JSON.parse(response) as T;
      return parsedData
    }
}

export const cache = new cacheConfig();

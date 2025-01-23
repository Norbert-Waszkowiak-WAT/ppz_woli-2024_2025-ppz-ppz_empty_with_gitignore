import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class SessionsService {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis(); // Defaults to localhost:6379
  }

  async saveSession(
    userId: string,
    sessionId: string,
    ttl?: number,
  ): Promise<void> {
    const key = `user:${userId}`;
    await this.redis.sadd(key, sessionId); // Add session ID to the set
    if (ttl) {
      await this.redis.expire(key, ttl);
    }
  }

  async getSessions(userId: string): Promise<string[]> {
    const key = `user:${userId}`;
    return this.redis.smembers(key); // Get all session IDs for the user
  }

  async deleteSession(userId: string, sessionId: string): Promise<void> {
    const key = `user:${userId}`;
    await this.redis.srem(key, sessionId); // Remove the session ID from the set
  }
  async renewSessionTTL(
    userId: string,
    sessionId: string,
    ttl: number,
  ): Promise<void> {
    const key = `user:${userId}`;
    const exists = await this.redis.sismember(key, sessionId); // Check if the session exists
    if (exists) {
      await this.redis.expire(key, ttl); // Renew TTL for the user's session set
    }
  }
}

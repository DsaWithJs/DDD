import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600 });

export function setCache(key: string, value: any, ttl?: number): boolean {
    return cache.set(key, value, ttl);
}

export function getCache<T = any>(key: string): T | undefined {
    return cache.get(key) as T | undefined;
}

export function existsInCache(key: string): boolean {
    return cache.has(key);
}

// Function to clear the cache
export function clearCache(): void {
    cache.flushAll();
}



...................
import { setCache, getCache, existsInCache } from './cacheManager';

// Set a value with a custom TTL of 2 hours
setCache('myKey', 'myValue', 7200);

// Get the value from the cache
const value = getCache<string>('myKey');
console.log(value); // Outputs: 'myValue'

// Check if the key exists in the cache
console.log(existsInCache('myKey')); // Outputs: true or false


.........................
import { setCache, getCache, existsInCache } from './cacheManager';

describe('Cache Manager', () => {
  const testKey = 'testKey';
  const testValue = 'testValue';
  const testTTL = 300; // 5 minutes

  // Test for setCache
  it('should set a value in the cache', () => {
    expect(setCache(testKey, testValue)).toBe(true);
  });

  it('should set a value with a custom TTL', () => {
    expect(setCache(testKey, testValue, testTTL)).toBe(true);
  });

  // Test for getCache
  it('should retrieve a value from the cache', () => {
    setCache(testKey, testValue);
    expect(getCache(testKey)).toBe(testValue);
  });

  it('should return undefined for a non-existent key', () => {
    expect(getCache('nonExistentKey')).toBeUndefined();
  });

  // Test for existsInCache
  it('should confirm if a key exists in the cache', () => {
    setCache(testKey, testValue);
    expect(existsInCache(testKey)).toBe(true);
  });

  it('should confirm that a non-existent key does not exist', () => {
    expect(existsInCache('nonExistentKey')).toBe(false);
  });
});

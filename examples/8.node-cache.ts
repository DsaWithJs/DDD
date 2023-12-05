import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600 }); // default TTL of 1 hour

// Function to set a value in the cache with an optional TTL
export function setCache(key: string, value: any, ttl?: number): boolean {
    return cache.set(key, value, ttl);
}

// Function to get a value from the cache
export function getCache<T = any>(key: string): T | undefined {
    return cache.get(key) as T | undefined;
}

// Function to check if a key exists in the cache
export function existsInCache(key: string): boolean {
    return cache.has(key);
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

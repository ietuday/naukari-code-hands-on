/**
 * Class representing a Least Recently Used (LRU) cache.
 */
class LRUCache {
    /**
     * Create an LRU cache.
     * @param {number} capacity - The maximum number of items the cache can hold.
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * Get the value associated with the key.
     * @param {any} key - The key to look up in the cache.
     * @returns {any} - The value associated with the key, or -1 if the key is not found.
     */
    get(key) {
        if (!this.cache.has(key)) return -1;
        let value = this.cache.get(key);
        // Move the accessed key to the end to mark it as recently used
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    /**
     * Insert a key-value pair into the cache.
     * @param {any} key - The key to insert.
     * @param {any} value - The value to insert.
     */
    put(key, value) {
        // If the key already exists, delete it to update its position
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } 
        // If the cache is at capacity, remove the least recently used item
        else if (this.cache.size >= this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
        // Insert the new key-value pair
        this.cache.set(key, value);
    }
}

// Example usage
const lru = new LRUCache(2);
lru.put(1, "A");
lru.put(2, "B");
console.log(lru.get(1)); // Output: "A"
lru.put(3, "C");
console.log(lru.get(2)); // Output: -1 (removed)

/**
 * Explanation:
 * - The LRUCache class represents a Least Recently Used (LRU) cache.
 * - The constructor initializes the cache with a given capacity and an empty Map.  
 * - The get method retrieves the value associated with a key from the cache.
 * - If the key is found, it moves the key to the end of the cache to mark it as recently used.
 * - The put method inserts a new key-value pair into the cache.
 * - If the key already exists, it deletes the key to update its position.
 * - If the cache is at capacity, it removes the least recently used item (the first key in the cache).
 * - The example usage demonstrates how to create an LRU cache with a capacity of 2.
 * - It inserts key-value pairs (1, "A") and (2, "B") into the cache.
 * - It retrieves the value associated with key 1, which is "A".
 * - It inserts a new key-value pair (3, "C") into the cache, causing key 2 to be removed.
 * - It attempts to retrieve the value associated with key 2, which is no longer in the cache, returning -1.
 * - The LRUCache class is a useful data structure for implementing caching mechanisms in applications.
 * - It allows efficient access to recently used items while limiting the cache size.
 * - The get and put methods ensure that the cache maintains the most recently accessed items within the specified capacity.
 * - The LRUCache class can be used to optimize performance by storing frequently accessed data in memory.
 * - It is commonly used in web servers, databases, and other systems to reduce the time and resources needed to retrieve data.
 * - The example usage demonstrates how to create an LRU cache, insert key-value pairs, and retrieve values from the cache.
 * - It shows how the cache handles capacity limits and removes the least recently used items when necessary.
 * - The LRUCache class is a versatile tool for managing data access patterns and improving application performance.
 * - It is a key component of many caching strategies and can be customized to suit specific use cases.
 * - The LRUCache class is a powerful data structure that combines efficient access with limited storage capacity.
*/
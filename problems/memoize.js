/**
 * Memoizes a given function by caching its computed results.
 * 
 * @param {Function} fn - The function to be memoized.
 * @returns {Function} - A new function that caches the results of the original function.
 * 
 * @example
 * const add = (a, b) => a + b;
 * const memoizedAdd = memoize(add);
 * 
 * console.log(memoizedAdd(1, 2)); // 3 (computed)
 * console.log(memoizedAdd(1, 2)); // 3 (cached)
 */
function memoize(fn) {
    let cache = new Map();
    return function (...args) {
        let key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        let result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function slowFib(n) {
    if (n <= 1) return n;
    return slowFib(n - 1) + slowFib(n - 2);
}

const fastFib = memoize(slowFib);
console.log(fastFib(40)); // Faster execution
/**
 * Explanation
 * - The memoize function takes a function fn as an argument and returns a new function.
 * - It initializes a new Map cache to store the computed results of the function.
 * - The returned function takes any number of arguments using the rest parameter syntax (...args).
 * - It converts the arguments array to a string key using JSON.stringify to uniquely identify them.
 * - It checks if the cache already has the key, and if so, returns the cached result.
 * - If the key is not in the cache, it calls the original function fn with the arguments.
 * - It stores the computed result in the cache with the key.
 * - Finally, it returns the computed result.
 * - The fastFib function is created by memoizing the slowFib function.
 * - The slowFib function calculates the Fibonacci number recursively, which is slow for large numbers.
 * - The fastFib function uses memoization to cache the results and speed up the computation.
 * - The console.log(fastFib(40)) call demonstrates the faster execution of the memoized function.
 * - The first call to fastFib(40) computes the result and caches it.
 * - The second call to fastFib(40) retrieves the cached result, resulting
 * in a faster execution time compared to the original slowFib function.
 * - The memoize function is a common technique used to optimize the performance of functions by caching their results.
 * - It is particularly useful for functions with expensive computations or repetitive calls with the same arguments.
 * - The memoized function can be used to improve the performance of recursive functions, dynamic programming algorithms, and more
 * - The memoize function is a common technique used to optimize the performance of functions by caching their results.
 * - It is particularly useful for functions with expensive computations or repetitive calls with the same arguments.
 * - The memoized function can be used to improve the performance of recursive functions, dynamic programming algorithms, and more.
 * 
 */
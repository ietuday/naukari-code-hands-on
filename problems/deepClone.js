/**
 * Creates a deep copy of an object, recursively copying all nested objects and arrays.
 * Handles cyclic references using a WeakMap.
 * 
 * @param {Object} obj - The object to be cloned.
 * @param {WeakMap} [hash=new WeakMap()] - A WeakMap to handle cyclic references.
 * @returns {Object} - The deep-cloned object.
 */
function deepClone(obj, hash = new WeakMap()) {
    if (typeof obj !== "object" || obj === null) return obj;
    if (hash.has(obj)) return hash.get(obj);

    let clone = Array.isArray(obj) ? [] : {};
    hash.set(obj, clone);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key], hash);
        }
    }
    return clone;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = deepClone(obj1);
obj2.b.c = 5;

console.log(obj1.b.c); // Output: 2
console.log(obj2.b.c); // Output: 5

// Test with cyclic references
/**
 * This test checks if the deepClone function can handle cyclic references.
 * It creates an object with a cyclic reference and attempts to clone it.
 * The cloned object should maintain the same structure without causing infinite loops.
 */
const cyclicObj = { a: 1 };
cyclicObj.self = cyclicObj;

const clonedCyclicObj = deepClone(cyclicObj);
console.log(clonedCyclicObj.self === clonedCyclicObj); // Output: true

/**
 * Explanation
 * - The deepClone function takes an object obj and an optional WeakMap hash as arguments.
 * - It first checks if the obj is a primitive value or null, and returns it as is.
 *  This is the base case for the recursion.
 * - It then checks if the obj is already in the hash WeakMap to handle cyclic references.
 * - If the obj is already in the hash, it returns the corresponding cloned object.
 * - If the obj is not in the hash, it creates a new empty object clone.
 * - It then sets the obj and clone in the hash to handle cyclic references.
 * - It iterates over the keys of the obj and recursively clones each property.
 * - It assigns the cloned properties to the clone object.
 * - Finally, it returns the cloned object.
 * - The deepClone function can handle both objects and arrays by checking if the obj is an array.
 * - It uses a WeakMap to store the original and cloned objects to handle cyclic references.
 * - The test cases demonstrate how the deepClone function can create deep copies of objects.
 * - The first test case clones an object with nested properties and modifies the clone.
 * - The original object remains unchanged, showing that the clone is a deep copy.
 * - The second test case creates an object with a cyclic reference and clones it.
 * - The cloned object maintains the same structure without causing infinite loops.
 * - The deepClone function is a useful utility for creating deep copies of objects in JavaScript.
 * - It can be used to avoid unintended side effects when working with nested objects and arrays.
 * - The function is recursive and handles complex object structures efficiently.
 * - It uses a WeakMap to handle cyclic references, ensuring that the cloning process is safe and reliable.
 * - The deepClone function is a powerful tool for working with complex data structures in JavaScript.
 * - It demonstrates the importance of understanding object references and memory management in JavaScript.
 * - By using deep cloning techniques, developers can write more robust and maintainable code.
 * - The deepClone function can be further extended to support additional features or optimizations as needed.
 * - For example, it could be modified to handle other data types or circular references in different ways.
 * - The function could also be optimized for performance by using techniques such as memoization or lazy evaluation.
 * - Overall, the deepClone function provides a flexible and reliable way to create deep copies of objects in JavaScript.
 * - It is a valuable tool for developers working with complex data structures and object-oriented programming.
 * - By understanding and using deep cloning techniques effectively, developers can write more robust and maintainable code.
 */
/**
 * Create a custom implementation of Array.prototype.map().
 */

function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Test cases
console.log(customMap([1, 2, 3], (item) => item * 2)); // [2, 4, 6]
console.log(customMap([1, 2, 3], (item, index) => item * index)); // [0, 2, 6]
console.log(customMap([1, 2, 3], (item, index, arr) => item + arr[index - 1])); // [1, 3, 5]

/**
 * Explanation:
 * - The customMap function takes two arguments, an array and a callback function.
 * - It creates an empty array called result.
 * - It iterates over each element of the array using a for loop.
 * - For each element, it calls the callback function with three arguments: the current element, the index of the current element, and the original array.
 * - It pushes the result of the callback function to the result array.
 * - Finally, it returns the result array.
 * - The customMap function is similar to the built-in map method of arrays, but it allows for custom logic to be applied to each element of the array.
 * - The test cases demonstrate how the customMap function can be used with different callback functions to achieve different results.
 * - The first test case multiplies each element of the array by 2.
 * - The second test case multiplies each element of the array by its index.
 * - The third test case adds the current element to the previous element in the array.
 * - The customMap function provides a flexible and customizable way to transform elements of an array based on custom logic.
 * - It can be used in place of the built-in map method when more complex transformations are needed.
 * - The customMap function can be further extended to support additional features or optimizations as needed.
 * - For example, it could be modified to handle asynchronous callbacks or parallel processing of elements
 * - The customMap function could also be optimized for performance by using techniques such as memoization or lazy evaluation.
 * - Overall, the customMap function provides a simple and powerful way to apply custom transformations to arrays in JavaScript.
 * - It demonstrates the flexibility and extensibility of JavaScript's functional programming
 * - It also highlights the importance of higher-order functions and callback functions in functional programming.
 * - By understanding and using these concepts effectively, developers can write more expressive, reusable, and maintainable code.
 */
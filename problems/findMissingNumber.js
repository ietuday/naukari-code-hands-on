function findMissingNumber(arr, n) {
    let sum = (n * (n + 1)) / 2;
    return sum - arr.reduce((a, b) => a + b, 0);
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); // Output: 4
/**
 * Explain with example
 */
// The sum of the first n natural numbers is given by the formula n * (n + 1) / 2.
// We can use this formula to calculate the sum of the first n natural numbers.
// The missing number can be found by subtracting the sum of the given array from the sum of the first n natural numbers.
// For example, if the array is [1, 2, 3, 5] and n is 5, the sum of the first 5 natural numbers is 5 * (5 + 1) / 2 = 15.
// The sum of the given array is 1 + 2 + 3 + 5 = 11.
// The missing number is 15 - 11 = 4.
// Therefore, the missing number is 4.
/**
 * Complexity analysis
 * The time complexity for this solution is O(n) because we are iterating over the input array to calculate the sum.
 * The space complexity is O(1) because we are using a constant amount of extra space.
 */

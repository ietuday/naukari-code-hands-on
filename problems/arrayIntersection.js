function arrayIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 6, 8])); // Output: [2, 4]

/**
 * Explain with example
 * The arrayIntersection function takes two arrays as input and returns a new array containing the elements that are present in both input arrays.
 * We can use the filter method to iterate over the first array and check if each element is present in the second array using the includes method.
 * If an element is present in both arrays, it is added to the result array.
 * For example, if the input arrays are [1, 2, 3, 4] and [2, 4, 6, 8], the elements 2 and 4 are present in both arrays.
 * Therefore, the output array will be [2, 4].
 * Complexity analysis
 * The time complexity for this solution is O(n*m), where n is the length of the first array and m is the length of the second array.
 * This is because we are iterating over each element in the first array and checking if it is present in the second array.
 */
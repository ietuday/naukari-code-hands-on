function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    return second;
}

console.log(secondLargest([10, 5, 8, 20, 15])); // Output: 15

// solution 2
function secondLargest2(arr) {
    let first = Math.max(...arr);
    let second = -Infinity;

    for (let num of arr) {
        if (num > second && num < first) {
            second = num;
        }
    }

    return second;
}

console.log(secondLargest2([10, 5, 8, 20, 15])); // Output: 15
/**
 * Explanation
    * We can find the second largest element in an array by iterating over the array and keeping track of the largest and second largest elements.
    * We initialize the largest and second largest elements to negative infinity to handle cases where the array contains negative numbers.
    * We iterate over the array and update the largest and second largest elements based on the current element.
    * If the current element is greater than the largest element, we update the second largest element to the current largest element and the largest element to the current element.
    * If the current element is greater than the second largest element and not equal to the largest element, we update the second largest element to the current element.
    * At the end of the iteration, the second largest element will be the second largest element in the array.
    * For example, if the array is [10, 5, 8, 20, 15], the largest element is 20 and the second largest element is 15.
    * Therefore, the second largest element in the array is 15.
    * The time complexity for this solution is O(n) because we are iterating over the input array.
    * The space complexity is O(1) because we are using a constant amount of extra space.
    * The second solution uses the Math.max() method to find the largest element in the array and then iterates over the array to find the second largest element.
    * The time complexity for the second solution is also O(n) because we are iterating over the input array.
    * The space complexity is O(1) for the second solution as well.
    * Both solutions are valid and achieve the same result, but the first solution is more efficient as it only requires one pass over the array.
    * The second solution requires two passes over the array, one to find the largest element and one to find the second largest element.
    * The first solution is more efficient and uses a single pass to find the second largest element in the array.
    * The second solution is less efficient as it requires two passes over the array to find the second largest element.
    
 */

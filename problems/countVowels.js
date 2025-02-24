function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    const vowels = "aeiou";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello")); // Output: 2
console.log(countVowels("uday")); // Output: 2
console.log(countVowels("udayaditya")); // Output: 5

// solution 2
function countVowelsOptimized(str) {
    return str.match(/[aeiou]/gi).length;
}

console.log(countVowelsOptimized("hello")); // Output: 2
console.log(countVowelsOptimized("uday")); // Output: 2
console.log(countVowelsOptimized("udayaditya")); // Output: 5

/**
 * Count Vowels
 * Problem:
 * Write a function that takes a string and returns the number of vowels in that string.
 * Solutions:
 * - Create a variable to store the count of vowels.
 * - Create a variable to store the vowels.
 * - Loop through the string.
 * - Check if the character is a vowel.
 * - If it is, increment the count.
 * - Return the count.
 * - Time complexity is O(n).
 * - Space complexity is O(1).
 * - solution 2:
 * - Use the match() method with a regular expression to match all the vowels in the string.
 * - Return the length of the matched array.
 * - Time complexity is O(n).
 * - Space complexity is O(n).
 */
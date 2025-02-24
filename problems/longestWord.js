/**
Problem:
Return the longest word in a given sentence.

For example, given the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped".
 */

function longestWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// solution 2

function longestWordOptimized(sentence) {
    return sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

console.log(longestWord("The quick brown fox jumped over the lazy dog")); // Output: jumped
console.log(longestWordOptimized("The quick brown fox jumped over the lazy dog")); // Output: jumped

/**
    * Complexity analysis
    * The time complexity for this solution is O(n) because we are iterating over the words in the sentence.
    * The space complexity is O(1) because we are using a constant amount of extra space.
    */

//Explain 
//We can split the sentence into words using the split() method and iterate over the words to find the longest word.
//We can keep track of the longest word found so far and update it if we find a longer word.
//For example, if the sentence is "The quick brown fox jumped over the lazy dog", we can split it into words ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"].
//We can then iterate over the words and update the longest word found so far.
//The longest word in this sentence is "jumped".
//Therefore, the longest word in the sentence "The quick brown fox jumped over the lazy dog" is "jumped".
//The optimized solution uses the reduce() method to find the longest word in the sentence.
//The reduce() method iterates over the words in the sentence and compares the length of each word to the length of the longest word found so far.
//It returns the longest word found.
//The time complexity for both solutions is O(n) because we are iterating over the words in the sentence.
//The space complexity is O(1) for the first solution and O(n) for the optimized solution because the reduce() method creates a new array to store the intermediate results.
//The optimized solution is more concise and uses a functional programming approach to find the longest word in the sentence
//The first solution is more explicit and uses a loop to find the longest word in the sentence.
//Both solutions are valid and achieve the same result, but the optimized solution is more concise and uses built-in JavaScript methods to find the longest word in the sentence.
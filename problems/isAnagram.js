/**
Check if Two Strings Are Anagrams
Problem:
Two words are anagrams if they contain the same letters in a different order.
 */

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const str1Chars = {};
    const str2Chars = {};
    for (let i = 0; i < str1.length; i++) {
        str1Chars[str1[i]] = (str1Chars[str1[i]] || 0) + 1;
        str2Chars[str2[i]] = (str2Chars[str2[i]] || 0) + 1;
    }
    for (let char in str1Chars) {
        if (str1Chars[char] !== str2Chars[char]) {
            return false;
        }
    }
    console.log(`${str1Chars}`);
    console.log(`${str2Chars}`);
    return true;
}

console.log(isAnagram("hello", "llohe")); // Output: true

// solution 2

function isAnagramOptimized(str1, str2) {
    if (str1.length !== str2.length) return false;

    let count = {};

    for (let char of str1) count[char] = (count[char] || 0) + 1;
    for (let char of str2) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

console.log(isAnagramOptimized("hello", "llohe")); // Output: true
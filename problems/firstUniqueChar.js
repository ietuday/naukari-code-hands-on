function firstUniqueChar(str){
    let charCount = {}
    for(let char of str){
        console.log(`Char: ${char}`);
        charCount[char] = charCount[char] + 1 || 1
        console.log(`CharCount: ${charCount}`);
    }

    for(let char in charCount){
        console.log(`Char: ${char}`);
        if(charCount[char] === 1){
            return char
        }
        console.log(`CharCount: ${charCount}`);
    }
    return null
}

console.log(firstUniqueChar("hello")); // Output: h
console.log(firstUniqueChar("uday")); // Output: u
console.log(firstUniqueChar("udayaditya")); // Output: i
console.log(firstUniqueChar("hellohello")); // Output: null
console.log(firstUniqueChar("")); // Output: null
console.log(firstUniqueChar("a")); // Output: a
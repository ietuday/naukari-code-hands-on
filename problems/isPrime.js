function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(17)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(Math.sqrt(17)); // Output: 4.123105625617661
/**
 * Explain with example
 * The isPrime function takes an integer n as input and returns true if n is a prime number, and false otherwise.
 * We first check if n is less than 2, as prime numbers are greater than 1.
 * We then iterate from 2 to the square root of n and check if n is divisible by any number in that range.
 * If n is divisible by any number, it is not a prime number, and we return false.
 * If n is not divisible by any number, it is a prime number, and we return true.
 * For example, if n is 17, we iterate from 2 to the square root of 17 (which is approximately 4) and find that 17 is not divisible by any number in that range.
 * Therefore, 17 is a prime number, and the output will be true.
 * If n is 10, we find that 10 is divisible by 2, and therefore, it is not a prime number. The output will be false.
 * Complexity analysis
 * The time complexity for this solution is O(sqrt(n)) because we iterate up to the square root of n to check for divisibility.
 * The space complexity is O(1) because we are using a constant amount of extra space.
 */
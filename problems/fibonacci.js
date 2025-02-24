function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/**

Explain with example
The fibonacci function generates the first n Fibonacci numbers and returns them as an array.
We initialize the array fib with the first two Fibonacci numbers, 0 and 1.
We then iterate from index 2 to n-1 and calculate each Fibonacci number by adding the two previous numbers in the sequence.
For example, if n is 10, the first two Fibonacci numbers are 0 and 1.
The next Fibonacci number is the sum of the previous two numbers, which is 0 + 1 = 1.
The following Fibonacci number is 1 + 1 = 2, and so on.
The output array will contain the first 10 Fibonacci numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].
Complexity analysis
The time complexity for this solution is O(n) because we iterate n times to generate the Fibonacci numbers.
The space complexity is also O(n) because we store all n Fibonacci numbers in an array.

*/
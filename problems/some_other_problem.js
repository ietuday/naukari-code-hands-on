function findPairsHashMap(arr, S) {
    let freq = new Map();
    let result = [];

    for (let num of arr) {
        let complement = S - num;
        if (freq.get(complement) > 0) {
            result.push([Math.min(num, complement), Math.max(num, complement)]);
            freq.set(complement, freq.get(complement) - 1);
        } else {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
    }

    result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    result.forEach(pair => console.log(pair[0], pair[1]));
}
// Example Usage:
const input = `5 5\n1 2 3 4 5`; // Simulating input as a string
const lines = input.split("\n");
const [N, S] = lines[0].split(" ").map(Number);
const arr = lines[1].split(" ").map(Number);

findPairsHashMap(arr, S);
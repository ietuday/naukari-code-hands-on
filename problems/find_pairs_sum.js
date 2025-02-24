function findPairs(arr, S) {
   arr.sort((a, b) => a - b); // Step 1: Sort the array in ascending order
   let left = 0, right = arr.length - 1;
   let result = [];

   while (left < right) {
       let sum = arr[left] + arr[right];

       if (sum === S) {
           result.push([arr[left], arr[right]]);
           left++; // Move left pointer
           right--; // Move right pointer
       } else if (sum < S) {
           left++; // Increase sum
       } else {
           right--; // Decrease sum
       }
   }

   // Print the results in required format
   result.forEach(pair => console.log(pair[0], pair[1]));
}

// Example Usage:
const input = `5 5\n1 2 3 4 5`; // Simulating input as a string
const lines = input.split("\n");
const [N, S] = lines[0].split(" ").map(Number);
const arr = lines[1].split(" ").map(Number);

findPairs(arr, S);

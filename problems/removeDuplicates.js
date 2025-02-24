function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(removeDuplicates([1, 1, 1, 1, 1, 1])); // [1]
console.log(removeDuplicates([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([])); // []
console.log(removeDuplicates([1])); // [1]
console.log(removeDuplicates([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 6])); // [1, 2, 3, 4, 5, 6]
console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1])); // [1]
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]

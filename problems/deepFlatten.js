function flatten(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flatten([1, [2, [3, [4, [5, [6]]]]], 7])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flatten([[1, 2, [3, 4]], 5, [6, [7, 8, [9, 10]]]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(flatten([[[[1], 2], 3], 4, [5, [6, [7, [8, [9, [10]]]]]]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(flatten([])); // []
console.log(flatten([1, [2, [], [3, [4, []]]]])); // [1, 2, 3, 4]


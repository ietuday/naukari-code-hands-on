function findLCA(root, p, q) {
    if (!root) return null;
    if (p < root.value && q < root.value) return findLCA(root.left, p, q);
    if (p > root.value && q > root.value) return findLCA(root.right, p, q);
    return root.value;
}

console.log(findLCA(bst.root, 5, 15)); // Output: 10

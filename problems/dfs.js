function dfs(graph, node, visited = new Set(), result = []) {
    if (!visited.has(node)) {
        visited.add(node);
        result.push(node);
        for (let neighbor of graph[node]) {
            dfs(graph, neighbor, visited, result);
        }
    }
    return result;
}

console.log(dfs(graph, "A")); // Output: ['A', 'B', 'D', 'E', 'F', 'C']

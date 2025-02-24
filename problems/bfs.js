function bfs(graph, start) {
    let queue = [start];
    let visited = new Set();
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            queue.push(...graph[node].filter(neighbor => !visited.has(neighbor)));
        }
    }
    return result;
}

const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
};

console.log(bfs(graph, "A")); // Output: ['A', 'B', 'C', 'D', 'E', 'F']

var possibleBipartition = function(n, dislikes) {
    function dfs(node, group = 1) {
        states[node] = group;
        
        for (const neighbor of graph[node]) {
            if (states[neighbor] === group) return false;
            if (!states[neighbor] && !dfs(neighbor, -group)) return false;
        }
        
        return true;
    }
    
    const graph = new Array(n + 1).fill().map(() => new Array());
    for (const [from, to] of dislikes) {
        graph[from].push(to);
        graph[to].push(from);
    }
    
    const states = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        if (!states[i] && !dfs(i)) return false;
    }
    
    return true;
}
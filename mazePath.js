/*
'''
You're given a 2d array with 1's and 0's. 1's represent walls, and 0's represent open, walkable space. A robot starts on the top left and goes down to the bottom right. This robot can move in the NSEW direction.

Output the shortest path a robot should take from the top left to the bottom right. If there are multiple shortest paths, any path is valid. If there is no valid path, return None/null.
 

EXAMPLE(S)
Maze:
0 0 0 0
1 1 0 0
0 0 0 1
0 1 1 0
0 0 0 0  => N=> (0,0)   bottom left (m - 1)(n -1)
shortest path from N to W


getMazePath(maze) -> [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]

Explanation: The robot needs to travel around the two rows of walls. We're representing the path returned by annotating it with Xs.
x x x 0
1 1 x 0
x x x 1
x 1 1 0
x x x x
 
Since robot can move either down or right, there is only one path to reach the cells in the first row: right->right->...->right.

FUNCTION SIGNATURE
def getMazePath(maze):
'''
*/
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] != 0) return []; // modify return type
    const queue = [[[0,0], 1]];
    const dest = [grid.length - 1, grid[0].length - 1];
    const visited = new Map();
    visited.set([0,0].toString(), null); // Mark source as visited

    const getNextSteps = ([x,y]) => {
        const dirs = [[1, 0], [-1, 0] , [0,1], [0,-1], [1,1], [-1,1], [-1,-1], [1,-1]];
        const nextSteps = [];
        for(const [nx, ny] of dirs) {
            if(grid[x + nx]?.[y + ny] == 0) nextSteps.push([x + nx, y + ny]);
        }
        return nextSteps;
    }
    
    for (let [curr, distance] of queue) {
        // Move the visited check to the loop
        if (curr[0] === dest[0] && curr[1] === dest[1] && grid[dest[0]][dest[1]] == 0) {
            // Derive the path from the linked list we now have in the visited structure:
            let path = [];
            while (curr) {
                path.push(curr);
                curr = visited.get(curr.toString());
            }
            return path.reverse(); // Need to reverse to get from source to destination
        }
        for (let adj of getNextSteps(curr)) {
            // Visited-check moved here:
            if (visited.has(adj.toString())) continue; 
            // Mark with the coordinates of the previous node on the path:
            visited.set(adj.toString(), curr);
            queue.push([adj, distance + 1]);
        }
    }
    
    return []; // must modify this as well
};

// demo
let grid = [[0,0,0],[1,1,0],[1,1,0]];
let result = shortestPathBinaryMatrix(grid);
console.log(result);



// Given the [adjacency matrix](keyword://adjacency-matrix-unweighted) of the *connected undirected* graph with *no loops or multiple edges*, find the distance between the two specified vertices.
//Unweighted graphs are the graph data structure which are not associated with any weight or value. By default their weight or value is considered as 1.
// __Example__

// For 
// matrix = [[false, false, true],
//           [false, false, true],
//           [true, true, false]]

// `vertex1 = 0`, and `vertex2 = 1`, the output should be
// `solution(matrix, vertex1, vertex2) = 2`.

// dist between two vertices 
// since there are no edges or graphs, we can do bfs traversal to keep storing the given vertex 
// initialize an array dist[0, 1, …., v-1] such that dist[i] stores the distance of vertex i from the source vertex and array pred[0, 1, ….., v-1] such that pred[i] represents the immediate predecessor of the vertex i in the breadth-first search starting from the source. 

//Time complexity O(V + E)

/* / a modified version of BFS that stores predecessor
// of each vertex in array p
// and its distance from source in array d
// a queue to maintain queue of vertices whose
    // adjacency list is to be scanned as per normal
    / boolean array visited[] which stores the
    // information whether ith vertex is reached
    // at least once in the Breadth first search
    // initially all vertices are unvisited
    // so v[i] for all i is false
    // and as no path is yet constructed
    // dist[i] for all i set to infinity
      // now source is first to be visited and
    // distance from source to itself should be 0
    */

// function addEdge(matrix,vertex1,vertex2){
//     matrix[vertex1].push(vertex2)
//     matrix[vertex2].push(vertex1)
// }
/*let visited = []; and let distance = [];: Arrays to keep track of the visited vertices and their distances from the starting vertex.

for (let i = 0; i < matrix.length; i++): Initialize the visited array with false for all vertices and the distance array with a large number (Number.MAX_SAFE_INTEGER) for all vertices.

queue.push(vertex1): Add the starting vertex to the queue.

visited[vertex1] = true; and distance[vertex1] = 0;: Mark the starting vertex as visited and set its distance to 0.

while (queue.length != 0): While there are vertices in the queue, repeat the following steps.

let currVertex = queue.shift();: Get the next vertex from the queue.

for (let i = 0; i < matrix.length; i++): Loop through all vertices.

if (matrix[currVertex][i] == true && visited[i] == false): If the edge exists between the current vertex and the next vertex and the next vertex has not been visited, repeat the following steps.

queue.push(i);: Add the next vertex to the queue.

visited[i] = true;: Mark the next vertex as visited.

distance[i] = distance[currVertex] + 1;: Set the distance of the next vertex to the distance of the current vertex plus 1.

if (i == vertex2) return distance[vertex2];: If the next vertex is the destination vertex, return its distance.

return -1;: If all vertices have been visited and the destination vertex has not been found, return -1.


Regenerate response */

function distanceVertex(matrix,vertex1,vertex2){
 let queue = []
 let distance = []
 let visited = []
 for(let i = 0 ;i< matrix.length ; i++){
   visited[i]= false;
   distance[i] = Number.MAX_SAFE_INTEGER
 } 

 queue.push(vertex1)
 visited[vertex1] = true;
 distance[vertex1] = 0;
 while(queue.length > 0){
    let currVer = queue.shift();
    for(let i = 0 ; i < matrix.length;i++){
        if(matrix[currVer][i] === true && visited[i]=== false){
            queue.push(i)
            visited[i] = true;
            distance[i] = distance[currVer]+ 1;
            if(i === vertex2) return distance[vertex2]
        }
    }
 }
 return -1
 
}

let matrix = [[false, false, true], [false, false, true], [true, true, true]];
let vertex1 = 2, vertex2 = 5;

console.log(distanceVertex(matrix,vertex1,vertex2))
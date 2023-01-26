/*
'''
❓ PROMPT
Suppose you are given an edge list for an undirected graph.
You can assume that all nodes in this graph have at least one edge, so a vertex list is unnecessary.

From a given start node, return a mapping of the distance to a list of nodes.

Example(s)
Input:
edges = [('A', 'B'), ('A', 'C'), ('A', 'D'), ('D', 'E'), ('C', 'D')]
start = 'A'
                C-----|
                |     |
                |     |
          B --- A --- D --- E
                |
                |
                D
Output:
{
    0: ['A'],
    1: ['B', 'C', 'D'],
    2: ['E'],
}
 

🔎 EXPLORE
State your assumptions & discoveries:
 

Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
function getLevelMapping(edgeList, startNode) {
def getLevelMapping(edgeList: list, startNode) -> dict:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
nodes at all level

'''
convert in to adjacency list
using bfs, traverse over the list by enqueing a tuple. store the key by level in mpping
*/

function toAdjList(edgeList, startNode) {
    let output = {};
    
    console.log(edgeList)
    for(let [v1,v2] of edgeList){
         output[v1] = [];
         output[v2] = [];
    }

    for(let [v1,v2]  of edgeList){
        output[v1].push[v1]
        output[v2].push[v2]
    }
   // console.log(output)
    return output
}

function getLevelMapping(edgeList,startNode){
   let adjList = toAdjList(edgeList)
   let queue = []
   let output = {}
   queue.push([startNode,0])
   let visited = new Set();
   visited.add(startNode)
   while(queue.length){
    let [curr,dist] = queue.shift();
    if(dist in output){
        output[dist].push[curr]
    }else{
        output[dist] = [curr]
    }
    for(let neighbor in adjList[curr]){
        if(!visited.has(neighbor)){
            visited.add(neighbor)
            queue.push([neighbor,dist + 1])
        }
       }
   }
   
   return output
}


console.log(JSON.stringify(getLevelMapping(
    [["A", "B"], ["A", "C"], ["A", "D"], ["D", "E"], ["C", "D"]],
    "A"
)))

console.log(JSON.stringify(getLevelMapping([])))
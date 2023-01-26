/*
'''
❓ PROMPT
Given a vertex and edge list of nodes and a start node for an undirected graph return the sum of all the nodes values accessible from the start node. For practice's sake, do this in DFS order.

Example(s)
vertexList: [1, 2, 3, 4, 5]
edgeList: [(1, 2), (2, 3), (1, 3)]

1--2
| /
3      4    5

sumNodes(vertexList, edgeList, 1) -> 6

Node 1 has access to 2 and 3. The sum of all these nodes is 6. Nodes 4 and 5 aren't accessible.
 

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
function sumNodes(vertexList, edgeList, startNode) {
def sumNodes(vertexList: list, edgeList: list, startNode: int) -> int:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/

function toAdjList(vertexList, edgeList) {       //convert vertex to adjacency list 
    let output = {}
    for(let v in vertexList){
        output[v] = []
        console.log(edgeList)
    }
    for(v1,v2 in edgeList){
        output[v1].push(v2)
        output[v2].push(v1)
        
    }
    
    return output
}

function sumNodes(vertexList,edgeList,startNode){
    if(startNode !== vertexList){
        return 0
    }
    let adjlist = toAdjList(vertexList,edgeList)
    let visited = new Set();
    let total = 0;
    function dfs(curr){
        let total
        if (curr in visited){
            return 
        }
        total += curr
        visited.add(curr)
    }
}


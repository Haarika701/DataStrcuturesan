
/*
'''
❓ PROMPT
Create a class that takes a vertex/edge list of a directed graph in the constructor. Suppose the inputted nodes are arbitrary strings.

Have 2 public methods:

(Map<string, int>, Array<Array<int>>) GraphConverter::getAsAdjacencyMatrix()

Return a tuple where the first value is a mapping to a row number, and the
second value is the VxV size matrix.

Map<string, List<string>> GraphConverter::getAsAdjacencyList()

Return a mapping from node ID to neighboring node IDs.

Example(s)
Suppose we have the following vertex list and edge list:
vertexList = ["n1", "n2", "n3"]
edgeList = [("n1", "n2")]

getAsAdjacencyList() should return
{
  "n1": ["n2"],
  "n2": [],
  "n3": [],
}

getAsAdjacencyMatrix() should return a tuple with the following values.

First value (IDs can be arbitrarily assigned in any order):
{
  "n1": 0,
  "n2": 1,
  "n3": 2,
}

Second value:
[
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
]
 

🔎 EXPLORE
State your assumptions & discoveries:
 cyclic or cyclic? 
 can be both

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
GraphConverter::getAsAdjacencyMatrix()
GraphConverter::getAsAdjacencyList()
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/
let registeredNode = new Set();
class Node{
     init(neigbors,id){
       if(id.has(registeredNode)){
        return "Duplicate ID found"
       }
       registeredNode.add(id)
       this.id = id;
       this.neighbors = []
    }
}

function connect(start,end,two_way_connection = false){
    
}
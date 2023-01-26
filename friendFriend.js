/*
'''
❓ PROMPT
Given a vertex and edge list of users of a social network and two user IDs, return whether they are friends of friends.

Example(s)
users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
friends = [("Jeff", "Susan"), ("Jeff", "Fred"), ("Susan", "Ed"), ("Ed", "Fred"), ("Jason", "Zach")]

Jeff---|
 |     |
Susan  |   Jason - Zach
 |     |
 Ed - Fred

isFOF(users, friends, "Jeff", "Ed") -> True
isFOF(users, friends, "Jeff", "Susan") -> False
isFOF(users, friends, "Jeff", "Jeff") -> False

 

🔎 EXPLORE
State your assumptions & discoveries:
 unidirected graph?
 works for 2 degree


Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
dfs algorithm 
create an adacency list
 dfs through the list 
 see if user1 and user2 form a cycle, return true else false
From user1, do a BFS to search all nodes that are 2 edges away. If you start processing nodes 3 edges away, return False early. If the user2 is 0 or 1 edges away, also return False early. Otherwise, return True.
Analyze the space & time complexity.
Approach 1:
Time: O(V + E)
Space: O(v+ E)
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
function isFOF(vertex_list, edge_list, user1, user2) {
def isFOF(vertex_list: list[str], edge_list: list, user1: str, user2: str) -> bool:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/

function toAdjList(vertexList,edgeList){
    let output = {}
    for(let node of vertexList){
        output[node] = []
    }

    for(let [v1,v2] of edgeList){
        output[v1].push(v2);
        output[v2].push[v1]
    }
    return output
}

function isFOF(vertexList,edgeList,user1,user2){
    if(!vertexList.includes(user1) || !vertexList.includes(user2)){
        return false
    }

    const adjList = toAdjList(vertexList,edgeList)

    let q = []
    q.push([user1,0])
    let visited = new Set()
    visited.add(user1)
    while(q.length > 0){
        let [curr,dist] = q.shift();
        if(dist > 0){
            return false
        }

        if(curr === user2){
            return dist === 2
        }

        for(let neighbor of adjList[curr]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                q.push([neighbor,dist + 1])
            }
        }
    }
    return false
}

let users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
let friends = [["Jeff", "Susan"], ["Jeff", "Fred"], ["Susan", "Ed"], ["Ed", "Fred"], ["Jason", "Zach"]]
console.log(isFOF(users, friends, "Foo", "Bar") === false)
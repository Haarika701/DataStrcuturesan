// ❓ PROMPT
// Given a starting node in a graph and a target, traverse the graph using DFS and return true if a node with the target value exists, and false otherwise

// Example(s)
//   1
//  / \
// 2   3
// node.hasPathTo(3) == true
// node.hasPathTo(4) == false

// 12
//  |
// 18
// | \
// 1  4 - 3
//    |
//    9
// node.hasPathTo(9) === true
// node.hasPathTo(14) === false
 

// 🔎 EXPLORE
// State your assumptions & discoveries:
//  assuming that root is present, check for child nodes
//    can have an adjancet list 

// Create examples & test cases:
 

// 🧠 BRAINSTORM
// What approaches could work? Consider data structures or algorithmic patterns.
// Analyze the space & time complexity.
// Approach 1:
// Time: O()
// Space: O()
 

// 📆 PLAN
// High-level outline of approach #: 
//  traverse trhough the graph and keep track of the node visited.
//  at each node, check if the value matches the target value.
//  if it does, return true
//  if it does not , check for its children, when there are no children left to check, check the algorithm that there are no paths to the target value.

// 🛠️ IMPLEMENT
// function hasPathTo(node, target) {
// hasPathTo(target) { // Alternatively, if it's written inside the Node class

// def hasPathTo(node: Node, target: int) -> bool:
// def hasPathTo(self, target: int) -> bool: # Alternatively, if it's written inside the Node class
 

// 🧪 VERIFY
// Run your examples & test cases.
// Methodically analyze and debug issue(s).

// '''
// */

class Node {
  constructor(val = null, children = []) {
    this.val = val
    this.children = children
  }}

  function hasPathTo(node, target) {
    let visited = new Set()  //keep track of visited nodes
  
    function hasPath(node, target) {
      if (node.val === target)    //check if the value matches target
          return true
  
      visited.add(node)  // if it does, then add it to the visited
  
      for (const child of node.children) {       //check the same for children // return true if foud 

        if (!visited.has(child) && hasPath(child, target))
          return true
      }
      return false
    }
  
    if (!node)    //check if there is no node 
      return false
  
    return hasPath(node, target)  //recursively return 
  }

  /* BFS*/
  function bfsHasPathTo(target){
     if(!this) return false
     const visited = new Set();
     const queue = [this]
     while(queue.length){
        const curr = queue.shift()
        if(curr.val === target) return true
        visited.add(curr.val)
        for(const child of curr.children){
            if(!visited.has(child.val)){
                queue.push(child)
            }
        }
     }
     return false
  }
  
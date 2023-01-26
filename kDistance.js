/*
'''
❓ PROMPT
Given a binary tree, a target node, and integer k, return an array of all nodes that are k distance away from the target node in any direction. This means we must include nodes that can only be reached by going up the tree via parent pointers.

Example(s)
          1 <--- root
    2           3
 4    5      6     7
8 9 10 11  12 13 14 15

allNodesKDistance(root, 2, 2) == {3,8,9,10,11}
allNodesKDistance(root, 6, 2) == {1,7}
 

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
function allNodesKDistance(root, target, k) {

// traverse the whole tree to return a pointer
// to the node since target is an integer
function search(root, target) {
  if (!root)
    return null

  if (root.val === target)
    return root

  const left = search(root.left, target)
  const right = search(root.right, target)

  if (left)
    return left

  if (right)
    return right

  return null
}

def allNodesKDistance(root: Node, target: int, k: int) -> list[int]:

# traverse the whole tree to return a pointer
# to the node since target is an integer
def search(root: Node, target: int) -> Node:
  if not root:
    return None

  if root.val == target:
    return root

  left = search(root.left, target)
  right = search(root.right, target)

  if left:
    return left
  if right:
    return right

  return None
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/
class Node {
    constructor(val, left = null, right = null) {
      this.val = val
      this.left = left
      this.right = right
    }
  }
function allNodesKDistance(root, target, k) {
   function mapChildrenParents(root){
   let parentRelationships = new Map()
   let unvisited = [root]
   while(unvisited.length > 0){
    let curr = unvisited.pop();
    if(curr.left){
        parentRelationships.set(curr.left)
        unvisited.push(curr.left)
    }

    if(curr.right){
        parentRelationships.set(curr.right)
        unvisited.push(curr.right)
    }

   } 
   return parentRelationships
   }

   function kDistanceNodes(root,childToMap,k){
    let unvisited = [[targetNode,0]]
    let seen = new Set()
    let nodes = []
    while(unvisited.length > 0){
        let[curr,dist] = unvisited.pop();
        seen.add(curr)

        if(dist === k){
            nodes.push(curr.val)
            continue
        }

        if (curr.left && !seen.has(curr.left))
        unvisited.push([curr.left, dist + 1])

      if (curr.right && !seen.has(curr.right))
        unvisited.push([curr.right, dist + 1])

      if (childToParentMap.has(curr) &&
          !seen.has(childToParentMap.get(curr)))
        unvisited.push([childToParentMap.get(curr), dist + 1])

    }
    return nodes
   }

   let targetNode = search(root, target)
  let childToParentMap = mapChildrenToParent(root)
  return kDistanceNodes(targetNode, childToParentMap, k)
}
    // traverse the whole tree to return a pointer
    // to the node since target is an integer
    function search(root, target) {
      if (!root)
        return null
    
      if (root.val === target)
        return root
    
      const left = search(root.left, target)
      const right = search(root.right, target)
    
      if (left)
        return left
    
      if (right)
        return right
    
      return null
    }
   
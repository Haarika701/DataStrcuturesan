/*
'''
❓ PROMPT
Given a binary tree, a target node, and integer k, return an array of all children that are k distance away from the target node.

Example(s)
           1 <--- root
    2            3
 4     5      6     7
8 9  10 11  12 13 14 15

allChildrenKDistance(root, 2, 2) == {8,9,10,11}
allChildrenKDistance(root, 6, 1) == {12,13}
 

🔎 EXPLORE
State your assumptions & discoveries:
 if no root prsent, then distance 0
 left subtree and right subtree?
, target always present 
unique values
distance cant be less than 1
k >= 1
distance represents the number of nodes between the target node and nodes beneath that.
return empty list if distance bk be greater
Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 If we are allowed to use parent pointers in the tree node structure, we can treat this as a BFS graph question and find all nodes with distance k. If parent pointers are not in the tree node structure, we can create our own set of parent pointers with a Hashmap of CurrentNode-to-Parent.
The target is not a node so look through the entire tree for the node containing the target since it's not a binary search tree
O(N) time
Create a dictionary of child-to-parent mappings.
O(N) time
Expand out k distance from the target node, storing nodes that are exactly k distance away.
O(N) time


🛠️ IMPLEMENT
function allChildrenKDistance(root, target, k) {

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

def allChildrenKDistance(root: Node, target: int, k: int) -> list[int]:

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
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
function allChildrenKDistance(root, target, k) {
    const targetNode = search(root,target)
    const unvisited =  [[targetNode,0]]  // tuple of (Node, distance-from-targetNode)
    const nodes = []
    while (unvisited.length > 0){
        const[curr,dist] = unvisited.pop();

        if(dist === k){
            nodes.push(curr.val)
            continue
        }

        if(curr.left){
            unvisited.push([curr.left,dist + 1])
        }
        if(curr.right){
            unvisited.push([curr.right,dist + 1])
        }
    }
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
      return nodes
}

const oneNode = new Node(1)

let result = allChildrenKDistance(oneNode, 1, 1)
console.log(result.length === 0 || result == null)

//   1
// 2   3
const twoLevels = new Node(1, new Node(2), new Node(3))

result = allChildrenKDistance(twoLevels, 1, 1)
console.log(new Set(result).has(2) && new Set(result).has(3))

result = allChildrenKDistance(twoLevels, 2, 1)
console.log(result.length === 0 || result == null)

result = allChildrenKDistance(twoLevels, 2, 2)
console.log(result.length === 0 || result == null)

result = allChildrenKDistance(twoLevels, 3, 3)
console.log(result.length === 0 || result == null)

//           1
//     2           3
//  4    5      6     7
// 8 9 10 11  12 13 14 15
const complete4levels = new Node(1,
  new Node(2,
    new Node(4,
      new Node(8),
      new Node(9)),
    new Node(5,
      new Node(10),
      new Node(11))),
  new Node(3,
    new Node(6,
      new Node(12),
      new Node(13)),
    new Node(7,
      new Node(14),
      new Node(15))))

result = allChildrenKDistance(complete4levels, 1, 1)
console.log(new Set(result).has(2) && new Set(result).has(3))

result = allChildrenKDistance(complete4levels, 1, 2)
console.log(new Set(result).has(4) && new Set(result).has(5) && new Set(result).has(6) && new Set(result).has(7))

result = allChildrenKDistance(complete4levels, 1, 3)
console.log(new Set(result).has(8) && new Set(result).has(9) && new Set(result).has(10) && new Set(result).has(11) && new Set(result).has(12) && new Set(result).has(13) && new Set(result).has(14) && new Set(result).has(15))

result = allChildrenKDistance(complete4levels, 5, 1)
console.log(new Set(result).has(10) && new Set(result).has(11))

result = allChildrenKDistance(complete4levels, 5, 2)
console.log(result.length === 0 || result == null)

result = allChildrenKDistance(complete4levels, 2, 1)
console.log(new Set(result).has(4) && new Set(result).has(5))

result = allChildrenKDistance(complete4levels, 2, 2)
console.log(new Set(result).has(8) && new Set(result).has(9) && new Set(result).has(10) && new Set(result).has(11))

result = allChildrenKDistance(complete4levels, 6, 1)
console.log(new Set(result).has(12) && new Set(result).has(13))

result = allChildrenKDistance(complete4levels, 6, 2)
console.log(result.length === 0 || result == null)

result = allChildrenKDistance(complete4levels, 3, 1)
console.log(new Set(result).has(6) && new Set(result).has(7))

result = allChildrenKDistance(complete4levels, 3, 2)
console.log(new Set(result).has(12) && new Set(result).has(13) && new Set(result).has(14) && new Set(result).has(15))

result = allChildrenKDistance(complete4levels, 3, 3)
console.log(result.length === 0 || result == null)

result = allChildrenKDistance(complete4levels, 10, 1)
console.log(result.length === 0 || result == null)

//           1 
//     2           3
//  4    5      6     7
// 8   10    12    14
const root = new Node(1,
  new Node(2,
    new Node(4,
      new Node(8)),
    new Node(5,
      new Node(10))),
  new Node(3,
    new Node(6,
      new Node(12)),
    new Node(7,
      new Node(14))))

result = allChildrenKDistance(root, 1, 1)
console.log(new Set(result).has(2) && new Set(result).has(3))

result = allChildrenKDistance(root, 1, 2)
console.log(new Set(result).has(4) && new Set(result).has(5) && new Set(result).has(6) && new Set(result).has(7))

result = allChildrenKDistance(root, 1, 3)
console.log(new Set(result).has(8) && new Set(result).has(10) && new Set(result).has(12) && new Set(result).has(14))

result = allChildrenKDistance(root, 5, 1)
console.log(new Set(result).has(10))

result = allChildrenKDistance(root, 5, 2)
console.log(result.length === 0 || result == null)

result = allChildrenKDistance(root, 2, 1)
console.log(new Set(result).has(4) && new Set(result).has(5))

result = allChildrenKDistance(root, 2, 2)
console.log(new Set(result).has(8) && new Set(result).has(10))

result = allChildrenKDistance(root, 6, 1)
console.log(new Set(result).has(12))

result = allChildrenKDistance(root, 6, 2)
console.log(result.length === 0 || result == null)

result = allChildrenKDistance(root, 3, 1)
console.log(new Set(result).has(6) && new Set(result).has(7))

result = allChildrenKDistance(root, 3, 2)
console.log(new Set(result).has(12) && new Set(result).has(14))

result = allChildrenKDistance(root, 3, 3)
console.log(result.length === 0 || result == null)

result = allChildrenKDistance(root, 10, 1)
console.log(result.length === 0 || result == null)
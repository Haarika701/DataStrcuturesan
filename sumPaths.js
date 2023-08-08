/*
'''
❓ PROMPT
Given a binary tree, return the sum of all root-to-leaf paths.

Example(s)
     1 <--- root
  2      3
4   5  6   7
sumAllTreePaths(root) == 36

Explanation:
* The leftmost path: 1 + 2 + 4 = 7
* The left-middle path: 1 + 2 + 5 = 8
* The right-middle path: 1 + 3 + 6 = 10
* The rightmost path: 1 + 3 + 7 =  11

Aggregating the paths: 7 + 8 + 10 + 11 = 36
 

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
 check if there is root, if there is , return 0. 
 since we need sum of each path , recursively accumalte the sum of left substree and right subtree and return the sum of its children. when you reach a leaf node, recursively return the sum back to the previous stack frame.


🛠️ IMPLEMENT
function sumAllTreePaths(root) {
def sumAllTreePaths(root: Node) -> int:
 

🧪 VERIFY
Run your examples & test cases.
let tree = Node(null)
oneNode = Node(5)
onepath = new Node(10, new Node(10, new Node 20)))
completeTree = new Node(1,
  new Node(2,
    new Node(4),
    new Node(5)),
  new Node(3,
    new Node(6),
    new Node(7))
)
Methodically analyze and debug issue(s).

'''
*/
class Node{
    constructor(left = null, right = null ,val){
        this.val = val;
        this.right = right;
        this.left = left;
    }
}
function sumAllTreePaths(node){
    if(!node) return 0
    let sum = 0;
    sum += node.val
    if(node.left === null && node.right == null){
        return sum
    }

    return sumAllTreePaths(node.left,sum) + sumAllTreePaths(node.right,sum) 
}
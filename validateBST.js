/*
'''
❓ PROMPT
Determine if a binary tree is a valid binary search tree. A binary search tree is a binary tree where for each node, all values in the left subtree are smaller than the current node, and all values in the right subtree are greater than the current node.

Example(s)
     10 <--- root
  5      15
3  7   12  17
isValidBST(root) == True

     30 <--- root
 18      50
3  7   33  77
isValidBST(root) == False
Explanation: 7 is smaller than 18, even though it's the right child.

     30 <--- root
 18      50
3  40   33  77
isValidBST(root) == False
Explanation: 40 is larger than 30, even though it's in the left subtree.
 

🔎 EXPLORE
State your assumptions & discoveries:
 root can be null
 all values are unique

Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
High-level outline of approach #: 
 recursively iterate over the tree
    compare left subtree value with curr node
    if smaller
    go to right subtree and compare with curr node
    check if larger
    return recursively ttrue

🛠️ IMPLEMENT
function isValidBST(root) {
def isValidBST(root: Node) -> bool:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/
class TreeNode{
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}


function isValidBST(root){
    function isValid(root, min ,max){
        if(!root) {
        return true
    } else if(root.value <= min || root.value >=max){
      return false;
    }
   return (root.left , min , root.value) && (root.right,root.value,max)

    }
    return isValid(root, -Infinity, Infinity)
}

const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
const tree4 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(9)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(isValidBST(null)) // true
console.log(isValidBST(tree1)) // true
console.log(isValidBST(tree2)) // false
console.log(isValidBST(tree3)) // true
console.log(isValidBST(tree4)) // false
console.log(isValidBST(new TreeNode())) // true
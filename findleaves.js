// Given the root of a binary tree, collect a tree's nodes as if you were doing this:
// Collect all the leaf nodes.
// Remove all the leaf nodes.
// Repeat until the tree is empty.
// Return an array of arrays representing the values of the leaves at each iteration. See examples below.
// Examples
// Input:
//           1
//          / \
//         2   3
//        / \     
//       4   5   

//       Identify [4,5,3]
//       Set: 1,2,3,4,5
      
// Output:
// [[4, 5, 3], [2], [1]]
// Function Signature
// def findLeaves(root: TreeNode) -> List[List[int]]

// empty tree:
// output: [[]]

// create a set of leaves
// output = []
// leaves = [] # on the same level
// set = [] # visited leaves

// iterate from root
//   iterate from root, dfs down the tree
//   for each node, 
//     check if its left and right child is already in set, if not
//       check if it's is a leaf
//       if it is then append to leaves and set
//   traverse left first then right subtree


// return output

function findLeaves(root) {
  let map = []

  function helper(root) {
    if(!root) return -1;

    let myIndex = Math.max(helper(root.left), helper(root.right)) + 1;

    if(map[myIndex] === null){
      map[myIndex] = [root.val]
    } else {
      map[myIndex].push(root.val)
    }
    return myIndex;
  }

  helper(root)

  return map;
}






// Problem Statement
//
// Given a binary tree, of numbers, and two numbers A and B, determine if A is an ancestor of B.

class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  
  // Example 1
  //
  //   3 
  // 1   2
  
  // A=3 B=1, returns true
  // A=3 B=2, returns true
  // A=2 B=3, returns false
  
  let example1 = 
  new TreeNode(3,
    new TreeNode(1),
    new TreeNode(2)
  );
  
  // Example 2
  //
  //         3
  //     1      2
  //           4    5
  
  // A=3, B=5 returns true
  // A=2, B=5 returns true
  // A=5, B=2 returns false
  let example2 = 
  new TreeNode(3,
    new TreeNode(1),
    new TreeNode(2, 
      new TreeNode(4),
      new TreeNode(5)
    )
  );
  
  // root: the first node in the tree
  // first: the ancestor
  // second: the descendent
  const validAncestor = (root, first, second) => {
    function findFirst(root) {
      if (root == null)
        return null;
      
      if (root.value == first)
        return root
      
      
  
       return findFirst(root.left) || findFirst(root.right);
    }
    
    function findSecond(root) {
      if (root == null)
        return false;
    
      if (root.value == second)
        return true;
        
      return findSecond(root.left) || findSecond(root.right);
    }
    
    // return false if no ancestor is found
    let node = findFirst(root)
    if(!node){
      return false
    }
     return findSecond(node)
  }
  
  const result = validAncestor(example2, 3, 5);
  const result1 = validAncestor(example2, 2, 5);
  const result2 = validAncestor(example2, 5, 2);
  console.log(result);
  console.log(result1);
  console.log(result2);
  
  // A=3, B=5 returns true
  // A=2, B=5 returns true
  // A=5, B=2 returns false
  
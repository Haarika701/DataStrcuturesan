//binary tree
//if left and right is null, then return 0
// if not then 
   //sum = 0;
   // sum = value + left and value + right
   // return the tree with updated sum value with parent

class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  function sumTree(root){
    helper(root)
    return root;
}

    function helper(node,parentValue){
        if(!node) return 
        helper(node.left,node.value)
        helper(node.right,node.value)
        if(parentValue){
            node.value += parentValue;
        }
    }
  
    const testTree = new TreeNode(9, new TreeNode(3, new TreeNode(1), new TreeNode(5)), new TreeNode(11, new TreeNode(10)))

    /* Returns edited tree */
    console.log(sumTree(testTree))

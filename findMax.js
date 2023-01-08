class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  function maxNode(root){
      
    if(!root) return 
    return Math.max(root.value,maxNode(root.left) || -Infinity,maxNode(root.right) || -Infinity)

  }
  console.log(maxNode(null)) // null

console.log(maxNode(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3

console.log(maxNode(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29

console.log(maxNode(new TreeNode(1))) // 1
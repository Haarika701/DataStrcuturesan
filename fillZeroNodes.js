class TreeNode {
    constructor(val, left=null, right=null) {
      this.value = val; 
      this.left = left;
      this.right = right;
    }
  }

  function fillZeroNodes(root){
         
        if(!root){
          return
        }
          const left = fillZeroNodes(root.left)
          const right = fillZeroNodes(root.right)

          if(right && left === null){
            root = root.left
            root.val = 0;
          }

          if(left && right === null){
            root = root.right
            root.val = 0;
          }
          return root
           
  }
class TreeNode {
    constructor(val, left=null, right=null) {
      this.value = val; 
      this.left = left;
      this.right = right;
    }
  }

  function removeBelowDepth(depth){

   return removeBelowDepthHelper(root,0,depth)

    function removeBelowDepthHelper(root,currDepth,depth){
      if(root === null) return
      if(currDepth === depth){
        root.left === null
        root.right === null
        return
      }
      removeBelowDepthHelper(root.left,currDepth + 1 , depth)
      removeBelowDepthHelper(root.right,currDepth+1,depth)
    }
  }
function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
    }

    function invertBT(root){
        if(!root){
           return 
        }

        let right = invertBT(root.left)
        let left = invertBT(root.right)
        root.right = left 
        root.left = right
        return root
    }

    let tree = new TreeNode(2,TreeNode(5),TreeNode(8),TreeNode(10) , TreeNode(15))
    console.log(invertBT(tree))
//sum of the node itself and its parent node
//update the node value after summing it with the parent value

//traverse the tree using dfs
//return the dfs root
//in the helper function
// pass in the parent value
// check if the ndoe is a parent value
//if it is a parent value sum with the node value 
// update the node value as the sum
//return the updated tree.

//if no parent value , then nodes are not modified,

class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

function createParentSumTree(root){
    dfs(root)
    return root
   function dfs(parentValue,nodeValue){
    if(!nodeValue) return
    dfs(nodeValue.left,nodeValue.value)
    dfs(nodeValue.right,nodeValue.value)

    if(parentValue){
        nodeValue.value = nodeValue.value + parentValue
    }
   }
  

}

const list1 = new TreeNode(1,
    new TreeNode(2, null, null),
    new TreeNode(4, null, null)
 )
 console.log(createParentSumTree(list1))

 const list2 = new TreeNode(1, 
    new TreeNode(3, 
       new TreeNode(3, null, null), 
        null
     ), 
    new TreeNode(4, 
       null,
       null
    )
 )
 console.log(createParentSumTree(list2))

 const list3 = new TreeNode(9, null, null)
console.log(createParentSumTree(list3))

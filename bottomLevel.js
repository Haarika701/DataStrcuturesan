//Return values of bottom level of tree
/* Perform a preorder traversal to calculate the level of each node of the binary tree.
Consider a hashmap and store the height into the map, where the key is the level or the horizontal distance of the ith node and the value is a pair (p, q), where p is the value of the node and q is the height of the node.
For every node:
Add the node to the resultant map if it is the first node to have the current horizontal distance.
Else, if a node is already present for the particular distance, replace the previous node with the current node, if the node has a height greater than the previous node.
*/
class TreeNode{
  constructor(value = 0, left = null, right = null){
    this.value = value
    this.left = left
    this.right = right
  }
}
// function printBottomLevel(root){
//   if(root === null){
//     return
//   }
//   var hd = 0;
 
//           // TreeMap which stores key value
//           // pair sorted on key value
//           var map = {};
 
//           // Queue to store tree nodes in level order
//           // traversal
//           var queue = [];
 
//           // Assign initialized horizontal distance
//           // value to root node and add it to the queue.
//           this.root.hd = hd;
//           queue.push(this.root);
 
//           // Loop until the queue is empty
//           // (standard level order loop)
//           while (queue.length != 0) {
//             var temp = queue.shift();
 
//             // Extract the horizontal distance value
//             // from the dequeued tree node.
//             hd = temp.hd;
 
//             // Put the dequeued tree node to Tr
//             map[hd] = temp.data;
 
//             // If the dequeued node has a left child
//             // add it to the queue with a horizontal
//             // distance hd-1.
//             if (temp.left != null) {
//               temp.left.hd = hd - 1;
//               queue.push(temp.left);
//             }
 
//             // If the dequeued node has a right
//             // child add it to the queue with a
//             // horizontal distance hd+1.
//             if (temp.right != null) {
//               temp.right.hd = hd + 1;
//               queue.push(temp.right);
//             }
//           }
//           for (const [key, value] of Object.entries(map).sort(
//             (a, b) => a[0] - b[0]
//           )) {
//             document.write(value + " ");
//           }
        
         
// }
function printBottomLevel(root){
    
    let queue = [root];
    let node = root;
    
    while (queue.length){
        if(!queue){
            return;
        }
        node = queue.shift();
        
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }
    return [node.value];
}




let tree1 = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))

let tree2 = new TreeNode(3, new TreeNode(3, new TreeNode(2), new TreeNode(4, new TreeNode(10))), new TreeNode(8))

let tree3 = new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(4, new TreeNode(6)))
console.log(printBottomLevel(tree1))

// test.test([2, 4], )

console.log(printBottomLevel(tree2))

console.log(printBottomLevel(tree3))

console.log(printBottomLevel(new TreeNode(5)))
const minDepth = (root) => {
    //if root is null, there is no level
     if(!root) return 0
     //variable to store the minimum depth
     let depth = 0
     //implemnt queue, starts with the root node
     let queue = [root]
     //variable to store the first 
     //shifted out node
     let current
     //while queue is not empty
     while(queue.length){
         //every level nodes number
         let queueLen = queue.length
         // loop through the current level nodes
         for(let i = 0; i< queueLen; i++){
             //first node out
             current = queue.shift()
             //if the current node is the leaf node
             // increment the depth, return the depth
             if(!current.left && !current.right){
                 depth++
                 return depth
             }
             //if node has children, push it to the queue
             if(current.left) queue.push(current.left)
             if(current.right) queue.push(current.right)
         }
         //after we finish one level, before moves to 
         //next level, we increment the depth
         depth++
     }
   
     //return the minimum depth
     return depth
 }


 const minDepth1 = (root) => {
    //if root is null, there is no depth
    if(!root) return 0
    //if the root has no left child
    //keep traverse with right child and increment the level by one
    if (!root.left) return minDepth(root.right) +1
    //if the root has no right child
    //keep traverse with left child and increment the level by one
    if (!root.right) return minDepth(root.left) + 1
    //compare left and right, choose the smaller value and add one level 
    //return the depth
    return Math.min( minDepth(root.left), minDepth(root.right) ) + 1
};
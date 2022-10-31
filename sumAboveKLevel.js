function sumOfNodesAtNthLevel(root, k)
{
 
    // If the current node is null
    if (root == null)
        return 0;
 
    // Create Queue
    var que = [];
 
    // Enqueue the root node
    que.push(root);
 
    // Level is used to track
    // the current level
    var level = 0;
 
    // To store the sum of nodes
    // at the Kth level
    var sum = 0;
 
    // flag is used to break out of
    // the loop after the sum of all
    // the nodes at Nth level is found
    var flag = 0;
 
    // Iterate the queue till its not empty
    while (que.length != 0)
    {
 
        // Calculate the number of nodes
        // in the current level
        var size = que.length;
 
        // Process each node of the current
        // level and enqueue their left
        // and right child to the queue
        while (size-- >0)
        {
            var ptr = que[0];
            que.shift();
 
            // If the current level matches the
            // required level then calculate the
            // sum of all the nodes at that level
            if (level == k)
            {
 
                // Flag initialized to 1
                // indicates that sum of the
                // required level is calculated
                flag = 1;
 
                // Calculating the sum of the nodes
                sum += ptr.data;
            }
            else
            {
 
                // Traverse to the left child
                if (ptr.left != null)
                    que.push(ptr.left);
 
                // Traverse to the right child
                if (ptr.right != null)
                    que.push(ptr.right);
            }
        }
 
        // Increment the variable level
        // by 1 for each level
        level++;
 
        // Break out from the loop after the sum
        // of nodes at K level is found
        if (flag == 1){
            break;
        }else{
            return - 1
        }
            
    }
    return sum;
}
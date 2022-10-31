// Print the value of each node in a level, followed by a new line character at the end of each level
// Function Signature: 
// func printByLevel(node: Node)
// Target runtime and space complexity:
// Runtime: O(n)

/* 

Examples:
Input:
   3
 2  4
1    5
Output:</br>
3</br>
2 4</br>
1 5

BFS
Establish queue 
Push root to queue
Loop through queue until it's empty
  Shift to get the front of the queue
  Push to end of queue any values
*/
 

class TreeNode {
    constructor(val, left = null, right = null) {
    this.data = val;
    this.left = left;
    this.right = right;
      }
      }
      
    let example1 = 
    new TreeNode(3,
      new TreeNode(2,new TreeNode (1)),
      new TreeNode(4,new TreeNode (5))
    );
    
    let example3 = new TreeNode(3 , new TreeNode(2), new TreeNode(1) )
    
    /*
          3
        2   4
      1    5 
    */
    
    function printByLevel(root) {
      if (!root) {
        return;
      }
    
      const queue = [];
      queue.push({level: 0, node: root});
    
      const result = [];
      /*
      [3, 24, 15]
      [[3], [2,4], [1,5]]
      */
    
      while (queue.length > 0) {
        const val = queue.pop();
        const node = val.node;
        let nextLevel = val.level + 1;
      
        
        const existingStr = result[val.level];
        let newStr;
    
        if (existingStr) {
          newStr = existingStr + node.data.toString();
        } else {
          newStr = node.data.toString();
        }
    
        result[val.level] = newStr;
    
        if (node.left) {
          queue.unshift({level: nextLevel, node: node.left})
        }
        if (node.right) {
          queue.unshift({level: nextLevel, node: node.right})
        }
      }
    
      result.forEach(level => {
        console.log(level);
      })
    }
    
    const printByLevel2 = (node) => {
      let levelNum = 0
    let solution = [];
    if (!root) return solution;
    let que = [root];
    while (que.length > 0) {
        let level = [];
        let newQue = [];
        for (let node of que) {
            level.push(node.val);
            if (node.left) newQue.push(node.left);
            if (node.right) newQue.push(node.right);
        }
        solution[levelNum] = level;
        que = newQue;
        levelNum++;
    }
    return solution;
    };
    
    /*
          3 ---- 0
        2   4 -- 1 +1 
      1    5 --- 2      
    */
    
    console.log(printByLevel2(example1))
    // let example2 = new TreeNode(1)
    
    
    class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
     
    function printOddNodes(root, isOdd)
    {
        // If empty tree
        if (root == null)
        return;
 
        // If current node is of odd level
        if (isOdd == true)
        document.write(root.data + " ");
 
        // Recur for children with isOdd
        // switched.
        printOddNodes(root.left, !isOdd);
        printOddNodes(root.right, !isOdd);
    }
 
    // Utility method to create a node
    function newNode(data)
    {
        let node = new Node(data);
        return (node);
    }
     
    let root = newNode(1);
    root.left = newNode(2);
    root.right = newNode(3);
    root.left.left = newNode(4);
    root.left.right = newNode(5);
    printOddNodes(root, true);
     
</script>
Output

1 4 5 
Time complexity : O(n)
Auxiliary Space: O(n) for Recursive Stack Space in case of Skewed Tree

Method 2 (Iterative): The above code prints nodes in preorder way. If we wish to print nodes level by level, we can use level order traversal. The idea is based on Print level order traversal line by line
We traverse nodes level by level. We switch odd level flag after every level. 

Implementation:


<script>
// Iterative Javascript program to print odd level nodes
 
class Node
{
    constructor(data)
    {
        this.data=data;
        this.left=this.right=null;
    }
}
 
{/* function printOddNodes(root)
{
    // Base Case
    if (root == null) return;
  
    // Create an empty queue for level
    // order traversal
    let q = [];
  
    // Enqueue root and initialize level as odd
    q.push(root);
    let isOdd = true;
  
    while (true)
    {
        // nodeCount (queue size) indicates
        // number of nodes at current level.
        let nodeCount = q.length;
        if (nodeCount == 0)
            break;
  
        // Dequeue all nodes of current level
        // and Enqueue all nodes of next level
        while (nodeCount > 0)
        {
            let node = q[0];
            if (isOdd == true)
                document.write(node.data + " ");
            q.shift();
            if (node.left != null)
                q.push(node.left);
            if (node.right != null)
                q.push(node.right);
            nodeCount--;
        }
  
        isOdd = !isOdd;
    }
}
 
// Driver code
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
printOddNodes(root);
 
// This code is contributed by rag2127
</script>
Output
1 4 5 
Time complexity : O(n) 
Auxiliary Space: O(n) for Queue Data Structure

This article is contributed by Pranav. If you like GeeksforGeeks and would like to contribute, you can also write an article using write.geeksforgeeks.org or mail your article to review-team@geeksforgeeks.org. See your article appearing on the GeeksforGeeks main page and help other Geeks. 



 */}

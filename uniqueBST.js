/**
 * @param {number} n
 * @return {number}
 
 5 => 
 
 1
  \
    2
     \
      3
       \
        4
         \ 
          5
 1
  \
    2
     \
      3
       \
        5
       / 
      4
      
 1
  \
    2
     \
      4
    /  \
   3    5
   
  1
   \
    3
   /  \
  2    4
        \
         5
        
  2
 /  \
1    3
      \
       4
       \
        5
        
     3
   /  \
  2    4
 /      \
1        5

          
        4
      /  \
     3    5
   /  
  2    
 /      
1        
    
        4
      /  \
     2    5
   /  \
  1    3
  
          5
         /
        4
      /  
     2    
   /  \
  1    3
  
            5
          /
         4
       /  
      3    
    /  
   2    
  /
 1
  
 recursion
 
 base case:
 n = 1 => 1
 n = 2 => 2
 
 recursive case:
 
 
 */
 var numTrees = function(n) {
    if (n <= 1) return 1;
    if (n === 2) return 2;
    
    let trees = 0;
    
    for (let i = 1; i <= n; i++) {
        // left subtree
        let currtrees = numTrees(i - 1); 
        
        // right subtree
        currtrees *= numTrees(n - i); 
        
        trees += currtrees;
    }
    
    return trees;
};
function sumNodesWithEvenParent(root) {
    let sum = 0;
    function dfs(node, parentValue) {
      if (!node) return;
  if (parentValue && parentValue % 2 == 0) {
    sum += node.value;
  }
  
  if (node.left) dfs(node.left, node.value);
  if (node.right) dfs(node.right, node.value);
    
  }
    dfs(root);
    return sum;
  }
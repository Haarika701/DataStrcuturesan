function findLeastOccurringNode(root) {
    const frequencies = new Map();
  
    function dfs(node) {
      if (!node) return;
  
      frequencies.set(node.val, (frequencies.get(node.val) || 0) + 1);
  
      dfs(node.left);
      dfs(node.right);
    }
  
    dfs(root);
  
    let resultVal;
    let currentMin = Infinity;
  
    for (const [nodeVal, currentFrequency] of frequencies) {
      if (currentFrequency < currentMin) {
        resultVal = nodeVal;
        currentMin = currentFrequency;
      }
    }
  
    return resultVal;
  }
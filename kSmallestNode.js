class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const complete3levels = new Node(30,
    new Node(20,
      new Node(10),
      new Node(25)),
    new Node(40,
      new Node(33),
      new Node(60)))
  
  
  function kSmallestNode(root, k) {
    if (!root) return 0;
  
    let stack = [root]
    let result = [0];
  
    while (stack.length > 0) {
      let current = stack.pop();
      result.push(current.val);
  
      if (current.left) stack.push(current.left)
      if (current.right) stack.push(current.right)
  
    }
    console.log( result)
    result.sort((a, b) => a - b);
    return result[k]
  }
  
  
  console.log(kSmallestNode(complete3levels, 1))
  console.log(kSmallestNode(complete3levels, 2))
  console.log(kSmallestNode(complete3levels, 4))
  console.log(kSmallestNode(complete3levels, 7))
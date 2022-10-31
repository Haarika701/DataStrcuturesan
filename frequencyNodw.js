// To solve this problem you must:
// Create a hashmap to store frequencies (key = node value, value = frequency).
// DFS or BFS through your tree using a helper function, incrementing frequencies in your hashmap as you go.
// After you're done recording frequencies - iterate through your hashmap to find node value with the largest frequency and return that node value (key).
/* public int getMaxFrequency () {
    if (root == null) return 0;
        
    HashMap<T, Integer> counts = new HashMap<T, Integer>();
        
    int count = counter(root.value);
    counts.put(root.value, count);

    // traverse the tree and grab counts
    int left = getMaxFrequencyHelper(root.left, counts, count);
    int right = getMaxFrequencyHelper(root.right, counts, count);

    return left > right ? left : right;
}

private int getMaxFrequencyHelper (Node<T> node, HashMap<T, Integer> counts, max) {
    if (node == null) return max;

    if (!counts.containsKey(node.value))
        counts.put(node.value, counter(node.value));

    int _max = counts.get(node.value) > max ? counts.get(node.value) : max;

    int left = getMaxFrequencyHelper(node.left, counts, _max);
    int right = getMaxFrequencyHelper(node.right, counts, _max);

    return left > right ? left : right;*/
//}

   //
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root) {

    if(!root) return 0
    let counts = new Map();
    let count = root.value;
    counts.get(root.value,count)
    let left = getMaxHelper(root.left,counts,count)
    let right = getMaxHelper(root.right,counts,count)
    
    return left > right ? left : right
  }
  
  function getMaxHelper(node,counts,max){
      if(node === null) return max
      if(!counts.has(node.value)){
          counts.set(node.value)
      }
      let resultMax = counts.get(node.value) > max ? counts.get(node.value) : max
      let left = getMaxHelper(node.left, counts, resultMax)
      let right = getMaxHelper(node.right, counts, resultMax)
      return  left > right ? left : right;
  }

//   # Python Solution:

// from collections import deque


// class TreeNode:
//     def __init__(self, value=0, left=None, right=None):
//         self.value = value
//         self.left = left
//         self.right = right


// # BFS
// def findMostFrequentNodeValue(root):
//     queue = deque([root])
//     count = dict()
//     while queue:
//         root = queue.popleft()
//         if root:
//             if root.value not in count:
//                 count[root.value] = 1
//             else:
//                 count[root.value] += 1
//             queue.append(root.left)
//             queue.append(root.right)

//     result_value = None
//     current_max = float("-inf")

//     for key, value in count.items():
//         if value > current_max:
//             current_max = value
//             result_value = key
//     return result_value


// # DFS
// def findMostFrequentNodeValue1(root):
//     count = dict()

//     def dfs(node):
//         if not node:
//             return None
//         if node.value not in count:
//             count[node.value] = 1
//         else:
//             count[node.value] += 1

//         dfs(node.left)
//         dfs(node.right)

//     dfs(root)

//     result_value = None
//     current_max = float("-inf")

//     for key, value in count.items():
//         if value > current_max:
//             current_max = value
//             result_value = key
//     return result_value


// # TestCases:
// print(findMostFrequentNodeValue(TreeNode(1, TreeNode(2, TreeNode(2), None), None)), 2)

// print(findMostFrequentNodeValue(TreeNode(1, TreeNode(1, TreeNode(1), TreeNode(1)), TreeNode(1, TreeNode(1), None))),
//       1)

// print(findMostFrequentNodeValue(TreeNode(9)), 9)

// print(findMostFrequentNodeValue(TreeNode(3, TreeNode(2, TreeNode(2), TreeNode(2)), TreeNode(3))), 2)

// print(findMostFrequentNodeValue(TreeNode(29, TreeNode(29, TreeNode(9)), TreeNode(9, None, TreeNode(9, TreeNode(9))))),
//       9)

// print(findMostFrequentNodeValue(TreeNode()), 0)

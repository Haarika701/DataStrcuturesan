/*
'''
❓ PROMPT
You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

Example(s)
   4 
 /   \
2     7

Explanation:
Combine the digits along each path until the end of the tree
* The left path = 42
* The right path = 47
Add the paths together = 42 + 47 = 89

     1
   /   \
  2     3
 / \
4   5
Explanation:
Combine the digits along each path until the end of the tree
* The left-most path: 124
* The left-middle path: 125
* The right path: 13
Add the paths together = 124 + 125 + 13 = 262 

 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sumAllTreePathDigits(root, prevTotal = 0) {)
def sum_all_tree_path_digits(root: Node, prev_total: int=0) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node{
    constructor(val,left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function sum_all_tree_path_digits(root,prevTotal = 0){
    if(root == null) return 0 

    let result = 0
    let currentTotal = (prevTotal * 10) + root.val
    if(root.left === null && root.right === null){
        return currentTotal
    }

    if(root.left !== null){
        result += sum_all_tree_path_digits(root.left,currentTotal)
    }

    if(root.right !== null){
        result += sum_all_tree_path_digits(root.right,currentTotal)
    }

    return result
}

// Test Case 1: None
console.log(sumAllTreePathDigits(null) === 0);

// Test Case 2: One Node
let one_node = new Node(5);
console.log(sumAllTreePathDigits(one_node) === 5);

// Test Case 3: One Path
//        1
//      1
//    1
//  1
let one_path = new Node(1, new Node(1, new Node(1, new Node(1))));
console.log(sumAllTreePathDigits(one_path) === 1111);

// Test Case 4: Complete Tree
//       1
//    2      3
//  4   5  6   7
let complete_tree = new Node(1,
  new Node(2,
    new Node(4),
    new Node(5)),
  new Node(3,
    new Node(6),
    new Node(7)));
console.log(sumAllTreePathDigits(complete_tree) === 522);

// Test Case 5: Partial tree with 4 levels
//        3
//    2       4
// 1    7     3  6
//  5  3  8  2    0
let partial_4_levels = new Node(3,
  new Node(2,
    new Node(1,
      null,
      new Node(5)),
    new Node(7,
      new Node(3),
      new Node(8))),
  new Node(4,
    new Node(3,
      new Node(2),
      null),
    new Node(6,
      null,
      new Node(0))));
console.log(sumAllTreePathDigits(partial_4_levels) === 16658);

// Test Case 6: Uneven Tree
//        3
//     2     4
//  1   5      6
//     3        8
let uneven_tree = new Node(3,
  new Node(2,
    new Node(1),
    new Node(5,
      new Node(3))),
  new Node(4,
    null,
    new Node(6,
      null,
      new Node(8))));
console.log(sumAllTreePathDigits(uneven_tree) === 7042);

// Test Case 7: Tree with only left child nodes
//        4
//      3
//    2
//  1
let left_child_tree = new Node(4, new Node(3, new Node(2, new Node(1))));
console.log(sumAllTreePathDigits(left_child_tree) === 4321);

// Test Case 8: Tree with only right child nodes
//  1
//    2
//      3
//        4
let right_child_tree = new Node(1, null, new Node(2, null, new Node(3, null, new Node(4))));
console.log(sumAllTreePathDigits(right_child_tree) === 1234);

// . Given a binary search tree, return the value of the violating node. When there is a violation, return the lowest node. If there is no violating node, return -1.

// The properties of a binary search tree are that:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// A violating node occurs when one of these properties is not met.

// For example, in this tree:

//   5
// /  \
//   2    10
//    \
//     8
// def solution(root):
    
//     if not root:
//         return -1
    
//     def helper (root, lower_bound, upper_bound):
        
//         if root is None:
//             return None

//         if lower_bound > root.value: 
//             return root.value
            
//         if root.value > upper_bound:
//             return root.value

//         left_ans = helper(root.left, lower_bound, root.value)
//         right_ans = helper(root.right, root.value, upper_bound)

//         return left_ans or right_ans
        
//     return_value = helper(root, float("-inf"), float("inf"))
    
//     if not return_value:
//         return -1
        
//     else:
//         return return_value
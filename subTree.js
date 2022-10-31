// Q. Given an binary tree and a target subtree, determine if the original tree contains a target subtree. A subtree of a tree is a tree consisting of a node in the original tree and all of its descendants while maintaining the same structure.

// Examples:

// Given a tree:
//             1
//           /  \
//         2      3
//       /  \
//     4     5
//           /
//         6

// and a subtree:
//         5 
//       / 
//     6

// returns true
// Given a tree:
//             1
//           /  \
//         2      3
//       /  \
//     4     5
//           /
//         6
// and a subtree:
//         2 
//       /  \
//     4     5

// returns false (6 is missing in a subtree)

// def isMatch(self, s, t):
//     if not(s and t):
//         return s is t
//     return (s.val == t.val and 
//             self.isMatch(s.left, t.left) and 
//             self.isMatch(s.right, t.right))

// def isSubtree(self, s, t):
//     if self.isMatch(s, t): return True
//     if not s: return False
//     return self.isSubtree(s.left, t) or self.isSubtree(s.right, t)
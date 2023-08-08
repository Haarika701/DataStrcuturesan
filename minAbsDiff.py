# Create a list of integers nodeValues to store the node values.
# Perform the DFS traversal over the given binary search tree. We call dfs(root) where dfs is a recursive method that takes TreeNode node as a parameter. We perform the following in this method:
# If node is null, return.
# Add the current node's value, node.val, in the nodeValues list.
# Recursively perform DFS from node.left.
# Recursively perform DFS from node.right.
# Sort the nodeValues list.
# Create an integer variable minDifference and initialize it to infinity.
# Iterate over inorderNodes starting from index 1, and for each element at index i, find the difference with the element at index i - 1 and update the variable minDifference accordingly.
# Return minDifference.

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def getMinAbsDifferece(self,root:Optional[TreeNode] ) ->int:
        nodeValues = []

        def dfs(node):
            if node is None:
                return 
            nodeValues.append(node.val)
            dfs(node.left)
            dfs(node.right)

        dfs(root)

        nodeValues.sort()
        minDifference = 1e9
        for i in range(l, len(nodeValues)):
            minDifference = min(minDifference , nodeValues[i] - nodeValues[i - 1])

        return minDifference

//Given a binary tree, determine if it is height-balanced
//Input: root = [3,9,20,null,null,15,7]
//Output: true
//A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

function isBalanced(root){
    function countHeight(root){
        if(!root) return true 
        const left = countHeight(root.left)
        const right = countHeight(root.right)
        const balanced = (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1)
        return[balanced, 1+ Math.abs(left[1], right[1])]
    }
    return countHeight(root)[0]
}


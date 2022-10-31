function deepest(node = this.getRoot(), level = 0)  {
    // this is the base case, we return the node as it is a leaf
    if (!node.left && !node.right) return {'node' : node, 'level' : level}

    // we continue traversing the tree as we are not at a leaf node 
    // so there must be nodes at a deeper level
    let left = node.left ? this.deepest(node.left, level+1) : { 'level' : -1 }
    let right = node.right ? this.deepest(node.right, level+1) : { 'level' : -1 }

    // return the deeper node
    return (left.level > right.level) ? left : right
}
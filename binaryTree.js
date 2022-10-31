
class Tree{
    constructor (value,left = null,right = null){
        this.data = value
        this.left = left
        this.right = right
    }
}
function binaryTreePaths(root){
    if (root === null) 
    return [];
    
const queue = [[root, []]];
const paths = [];

while (queue.length) {
    const [node, path] = queue.shift();
    
    if (node.left === null && node.right === null) {
        paths.push(path.concat([node.val]).join('->'));
        continue;
    } 
    
    if (node.left !== null)
        queue.push([node.left, path.concat([node.val])]);   
    
    if (node.right !== null)
        queue.push([node.right, path.concat([node.val])]);   
}

return paths;
}
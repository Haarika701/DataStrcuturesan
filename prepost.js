/* from preorder and inorder, create a binary tree 
preorder : root, left ,right
inorder: left root, right

Input: preorder = [3,9,1,2,20,15,7], inorder = [1,9,2,3,15,20,7]
Output: [3,9,20,null,null,15,7]

in preorder we know the root 

[3,9,1,2,20,15,7] => root : 
[9,1,2,20,15,7]  = root : 9
[]
 iorder: root is unknown
 [1,9,2,3,15,20,7]  left  subtree = 1,9 ,2    right subtree 15,20,7
                                   lsb    rsb
[9]
                                   3 root

construct a binary tree with the help of recursion


keep track of inorder using hashmap

initialize an integer variable preorderInderx to keep track of the element that will be used to construct the root

implement recursio

  


 */
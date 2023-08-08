/*
'''
❓ PROMPT
Given a linked list, delete the middle node of the list in a single pass.

If *n* is the length of the list, the middle node is *n/2* using zero-based indexing.

Return the head of the modified list.

Example(s)
head = 1
deleteMiddleNodeSinglePass(head)) == "<empty>"

head = 1 -> 2
deleteMiddleNodeSinglePass(head)) == "1"

head = 1 -> 2 -> 3
deleteMiddleNodeSinglePass(head)) == "1 -> 3"
 

🔎 EXPLORE
List your assumptions & discoveries:
 return null in case empty linked list 
 if only one element, return a null head
Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Single pass approach => fast pointer, slow pointer 
find the middle node using fast and slow pointer 
once middle node found ,
delete the middle node by making it null and return the modified list(head)
Algorithm 1:
Time: O(n) traverses through the list till length n 
Space: O(1) to store two pointers 
 

📆 PLAN
Outline of algorithm #: 
 1 -> 3 
initialise slow pointer to head and slow pointer to the next element of the list 
itertae through the list 
 - slow should go node by node 
 - fast should skip nodes (fast.next.next)
 once the node is found, stop the iteraring once fast node finds the end of the list 
 delete the middle node using slow pointer 
 return the modfiied list 


🛠️ IMPLEMENT
function deleteMiddleNodeSinglePass(head) {
def deleteMiddleNodeSinglePass(head: Node) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/


class Node {
    constructor(val, next=null) {
      this.val = val
      this.next = next
    }
  }
  
  function deleteMiddleNodeSinglePass(head) {
     // Edge case: return nullptr if there is only one node.
     if (head.next == null)
     return null;
 
 // Initialize two pointers, 'slow' and 'fast'.
 let slow = head, fast = head.next.next;
 
 // Let 'fast' move forward by 2 nodes, 'slow' move forward by 1 node each step.
 while (fast != null && fast.next != null) {
     slow = slow.next;
     fast = fast.next.next;
 }
 
 // When 'fast' reaches the end, remove the next node of 'slow' and return 'head'.
 slow.next = slow.next.next;
 return head;
  }
function toString(head) {
    if (!head)
        return "<empty>"

    let parts = []
    while (head) {
        parts.push(head.val)
        head = head.next
    }

    return parts.join(" -> ")
}

let head = null;
console.log(toString(deleteMiddleNodeSinglePass(head)) === "<empty>");

head = new Node(1) // 1
console.log(toString(deleteMiddleNodeSinglePass(head)) === "<empty>")

head = new Node(1, new Node(2)) // 1 -> 2
console.log(toString(deleteMiddleNodeSinglePass(head)) === "1")

head = new Node(1, new Node(2, new Node(3))) // 1 -> 2 -> 3
console.log(toString(deleteMiddleNodeSinglePass(head)) === "1 -> 3")

head = new Node(4, new Node(6, new Node(8, new Node(3)))) // 4 -> 6 -> 8 -> 3
console.log(toString(deleteMiddleNodeSinglePass(head)) === "4 -> 6 -> 3")

head = new Node(4, new Node(6, new Node(8, new Node(3, new Node(4))))) // 4 -> 6 -> 8 -> 3 -> 4
console.log(toString(deleteMiddleNodeSinglePass(head)))
// Given a linked list and a positive number, k, reverse k items in the list at a time as well as reverse the remaining fragment, if any.
//Validation
// Independently create a comprehensive test suite for this problem. It should cover most general and boundary cases without enumerating every possible input permutation.
// empty list
// 1 node list
// odd length list
// even length list
// k = 1
// k == list length
// k == half list length
// k > list length
/* k can be euqal to the list => reverse the whole list
k > list, reverse the while list
k-size blocks reverse whatever remains*/
class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function toString(head) {
  if (!head)
    return "<empty>"

  let parts = []
  while(head) {
    parts.push(head.val)
    head = head.next
  }

  return parts.join(" -> ")
}

//1-> 2 -> 3 -> 4 -> 5 -> 6 , k = 3
// pointer matches k 
// reverse nodes from k pointer
//pointer to the last node
//pointer to the first node
//
// 3 -> 2 -> 1 -> 6 -> 5 -> 4

function reverseBlocks(head, k) {
    function reverseOneBlock(head, k) {
      // 0 and 1 length lists do not require reversing, no matter what k is.
      if (!head || !head.next) return [head, head, null];
  
      let a = head;
      let b = head.next;
      a.next = null;
      let last = a;
      let count = 1;
      while (b && count < k) {
        const temp = b.next;
        b.next = a;
        a = b;
        b = temp;
        count++;
      }
  
      // first, last, remainder
      return [a, last, b];
    }

    if(k === 1){
        return head
    }
    const dummy = new Node()
    let last = dummy
    let remainder = head
    while(remainder){
        const[f,l, r] = reverseOneBlock(remainder,k)
        last.next = f;
        last = l
        remainder = r
    }
    return dummy.next
}

function reverseBlocks2(head,k){
    if(!head || !head.next || k === 1){
        return head
    }
    let prev = head
    let curr = head.next
    prev.next = null
    let last = prev
    let count = 1
    while(curr && count < k){
        const temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
        count++
    }
    if(curr){
        last.next = reverseBlocks(curr,k)
    }
    return prev
    
}
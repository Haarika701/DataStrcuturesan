class ListNode {

    constructor(value = 0, next = null) {
  
        this.value = value
  
        this.next = next
  
    }
  
  
  
  toString() {
  
    let result = String(this.value);
  
    if (this.next) {
  
      result += ` -> ${this.next.toString()}`;
  
    }
  
    return result;
  
  }
  
  }

//   When traversing the list with a pointer slow, make another pointer 
// fast that traverses twice as fast. When fast reaches the end of the list, slow must be in the middle.
//make the middle node as curr.next and decrementing the k each time the node is deleted

  
  function findMiddle(head) {
    let slow = head, fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
  }
  
  function removeKAfterMiddle(head, k)  {
  const middle = findMiddle(head);
  
  let curr = middle;
  while (curr && k >= 0) {
    curr = curr.next;
    k--;
  }
  
  middle.next = curr;
 
  return head;
  }
  
  let l1 = new ListNode(1, new ListNode(2, new ListNode(3)))
  
 console.log( removeKAfterMiddle(l1,1))
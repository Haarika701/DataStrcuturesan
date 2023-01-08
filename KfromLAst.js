
 function kthFromLast(head, k) {

    let slow = head;
  
    let fast = head;
  
  
  
    for (let i = 0; i < k; i++) {
  
      if (fast) {
  
        fast = fast.next;
  
      } else {
  
        return -1;
  
      }
  
    }
  
  
  
    while (fast) {
  
      slow = slow.next;
  
      fast = fast.next;
  
    }
  
  
  
    return slow.value;
  
  }
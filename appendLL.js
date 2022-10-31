// Given a linked list, append an element with a target value to the list iteratively.
class ListNode {

    constructor(value = 0, next = null) {

        this.value = value

        this.next = next

    }

}



function arrayify(head) {

    let ptr = head

    var array = []

    while (ptr != null) {

        array.push(ptr.value)

        ptr = ptr.next

    }

    return array

}



function append(head, target) {

    // Write your code here.
    if(!head) {
        return new ListNode(target)
    }
    if(head.next){
        append(head.next,target)
    }else{
        head.next = new ListNode(target)
    }
return head;
}

function append2(head, target) {

    if (!head) {
  
      return new ListNode(target);
  
    }
  
    let node = head;
  
    while (node.next) {
  
      node = node.next;
  
    }
  
  
  
    node.next = new ListNode(target);
  
    return head;
  
  }
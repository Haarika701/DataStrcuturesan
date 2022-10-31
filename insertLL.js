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



function insert(head, target) {

    // Write your code here.
  if(!head) return new ListNode(target)
  let dummy = new ListNode(0)
  dummy.next = head
  let node = dummy;
  while(node){
    if(!node.next || target < node.next.value){
        const next = node.next
        node.next = new ListNode(target)
        node.next.next = next
        break;
    }
    node = node.next
  }
    return dummy.next

}
// Given the head node of a singly linked list, remove all the nodes with values that appear more than once. Return the head node of the new linked list, after removing all the duplicate nodes.

class ListNode{
    constructor(){
        this.value = value
        this.next = node
    }
}

function removeDuplicateNodes(head){
let map = new Map();
let curr = head
while(curr){
   if(map.has(curr.value)){
    map[curr.value] += 1
   }else{
    map[curr.value] = 1
   }

   let sentinel = new ListNode(0)
   sentinel.next = head
   curr = sentinel

   while(curr){
    let future = curr.next
    while(future && map[future.value] > 1){
        future = future.next
    }
    curr.next = future
    curr = curr.next
   }
}
return sentinel.next
}
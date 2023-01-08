class Node {
    constructor(val, next=null) {
      this.val = val
      this.next = next
    }
  }

  function firstOccurance(head,target){
   if(!head) return -1
   let index = 0 ; 
   while (node) {
    if (node.val === target)
      return index
    
    index += 1
    node = node.next
  }

  return -1
  }
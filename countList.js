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

function countList(head){
    let count = 0;
    let node = head
    while (node){
        count++;
        node = node.next
    }
    return count
}
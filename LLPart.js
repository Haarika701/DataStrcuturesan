// Given the head of a linked list and any number parts, partition the list into parts consecutive segments. No two segments should have a size differing more than one.
// Return an array of n of head nodes. The segments should be in the same original order, and segments occurring earlier should never be smaller than later segments.
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
/* Approach
determine the length of the list
 determine the length/size of the part
determine no of nodes left

If there are NN nodes in the linked list root, then there are N / kN/k items in each part, plus the first N \% kN%k parts have an extra item. We can count NN with a simple loop.

Now for each part, we have calculated how many nodes that part will have: width + (i < remainder ? 1 : 0). We create a new list and write the part to that list.

Our solution showcases constructs of the form a = b = c. Note that this syntax behaves differently for different languages.



*/
class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function segmentLinkedList(root,k){
    var length = 0;
    var current = root;
    while (current) {
        length++;
        current = current.next;
    }
    
    var prev;
    var result = [];
    current = root;

    var minPartLength = Math.floor(length / k);
    var left = length - minPartLength * k;
    
    for (var i = 0; i < k; i++) {
        if (i < length) {
            result.push(current);
            for (var j = 0; j < minPartLength; j++) {
                prev = current;
                current = current.next;
            }
            if (left) {
                prev = current;
                current = current.next;
                left--;
            }
            prev.next = null;
        } else {
            result.push(null);
        }
    }
    
    return result;
}
list1 = new Node(1, new Node(2,new Node(3,new Node(4,new Node(5, new Node(
    6, new Node(7, new Node(8, new Node(9, new Node(10))))))))))
segmentLinkedList(list1, k=1)

// # [
// #     1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
// # ]

// # 1->2->3->4->5
list2 = new Node(1,new Node(2,new Node(3, new Node(4, new Node(5)))))
segmentLinkedList(list2, k=10)

// # [
// #     1
// #     2
// #     3
// #     4
// #     5
// #     []
// #     []
// #     []
// #     []
// #     []
// # ]

// # 1->2->3->4->5
list3 = new Node(1,new  Node(2,new Node(3, new Node(4, new Node(5)))))
segmentLinkedList(list3, parts=2)


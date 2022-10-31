// Q. Given K sorted linked lists, merge all the lists into one sorted list. Each linked list is sorted in ascending order.
// Examples:
// • Given a linked list: [] // returns []
// • Given an array of linked lists (only the head pointers): 
//     [[1, 4, 5], [1, 3, 4], [2, 6]] // returns: [1, 1, 2, 3, 4, 4, 5, 6]
/* 
1 -> 4 -> 5
1-> 3 -> 4 
2-> 6
merge 1st and second
1 -> 4 -> 5
head of second list will become a node of first list.
1 -> 4 -> 5 -> 1 -> 3 -> 4
=> new node
 */
class ListNode{
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
         
     }
function mergeLists(lists){
    function merge2Lists(list1,list2){
        let dummy = new ListNode(0)
        let curr = dummy;
        while(list1 && list2){
            if(list1.val <= list2.val){
                curr.next = list1
            }else{
                curr.next = list2
                list2 = list2.next
            }
            curr = curr.next
        }
        if(list1){
            curr.next = list1
        }else{
            curr.next = list2
        }
        return dummy.next
    }

    let amount = lists.length
    let interval = 1
    while(interval < amount){
        for(let i = 0 ; i < amount - interval ; i += interval *2){
            lists[i] = merge2Lists(lists[i],lists[i + interval])
        }
        interval = interval * 2
    }
    if(amount > 0){
        return lists[0]
    }else{
        return null
    }
}

console.log(mergeLists([[1, 4, 5], [1, 3, 4], [2, 6]]))
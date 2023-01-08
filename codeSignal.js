//Given an array, create a linked list with its values in the order they appear in the array.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/* convert array to linked list
- create a new linkedlist node 
- iterate though the array
- push each element with the node in 

- push the null pointer as tail */
function solution(array) {
 let node,temp
 
 if(!array.length ) return []
     for(let i = array.length - 1; i >= 0 ; i--){
         if(!node){
             node = new ListNode(array[i])
         }else{
             temp = new ListNode(array[i])
             temp.next = node;
             node = temp
         }
     }
 return node;
 
}

//Given an unsorted linked list, find the element with the lowest value.

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
let min = Number.MAX_VALUE

let curr = head
while(curr !== null){
    if(min >  curr.value) min = curr.value
        
        curr = curr.next
}
return min
}


//Given a linked list and a target, remove all nodes that are NOT the target value
if (!list) return list;

  const sentinel = new ListNode(0, list)
  let curr = sentinel;
  while (curr && curr.next) {
    if (curr.next.value === target) {
    curr.next = target
    } else {
      curr = curr.next.next;
      }

  }
  return sentinel;


// Given a linked list, insert a node with the value 0 after each existing node. This should double the length of the original list and every other value should be a 0.
// Given a linked list, insert a node with the value 0 after each existing node. This should double the length of the original list and every other value should be a 0.
// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
function solution(inputString) {
let newStr = [];
  for(let i = 0; i < inputString.length; i++) {
      // Increment each letter by 1 to get the next letter, push it into array
      newStr.push(String.fromCharCode((inputString[i].charCodeAt() + 1)));
  }
     /* 
        After incrementing 'z' it becomes '}', need to handle this edge case
        Turns array containing answer into a string
        Handles 'z' edge case by using a RegEx to replace instances of '}' with 'a' 
     */
     let answer = newStr.join("").replace(/{/g, 'a');;
    
     return answer;
}

// Given a string, find the character that appears most frequently. You may assume there is only one most frequent character.
function solution(string) {
  let result = new Map();
  let maxChar = ''
  let splitted = string.split('')
  for(let i = 0 ; i <  splitted.length ; i++){
      let key = splitted[i]
      if(result.has(key)){
        maxChar += key
      }else{
        maxChar = key
      }
  }
  return maxChar
}
//Given two sorted linked lists of integers, return a list that includes the values in both.
function solution(a, b) {
     let result = new ListNode(0);
        let curr = result;
        while (a != null && b != null) {
            if (a.value == b.value) {
                curr.next = new ListNode(a.value);
                curr = curr.next;
 
                a = a.next;
                b = b.next;
            }
            else if (a.value < b.value)
                a = a.next; 
            else
                b = b.next;
        }
        result = result.next;
        return result;
}

//Given two linked lists of different length, sum elements' value at the same position.
 let list = new ListNode(0);
  let currentNode = list;

  let sum = 0;
  let carry = 0;

  while (head1 !== null || head2 !== null || sum > 0) {
    if (head1 !== null) {
      sum += head1.value;
      head1 = head1.next;
    }

    if (head2 !== null) {
      sum += head2.value;
      head2 = head2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;

    sum = carry;
    carry = 0;
  }

  return list.next;
// Given a linked list, return the value of the element that is at the 1/3 position from the head.
// * You may assume the total number of elements is multiples of 3 (e.g. 3, 6, 9, 12 ...).
// Examples:
// * Given a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 // returns 2
// * Given a linked list: 1 -> 2 -> 3 // returns 1
function solution(head) {
  let length = 1;
  let curr = head;
  let quarter = head
  while(curr = curr.next){
      
      if(!(length % 3)){
          quarter.value 
      }
  }
  return quarter.value + 1
}

// Given an unsorted linked list with unique values, insert an element before the target element
// * If target cannot be found in the list, do nothing.
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head, target, value) {
 let newNode = new ListNode(value)
   let dummyHead = new ListNode(0)
  dummyHead.next = head
  let node = dummyHead
  while (node) {
    if (!node.next || target  === node.next.value) {
      newNode.next = node.next
      node.next = newNode;
      break;
    }
    node = node.next;

  }
  return dummyHead.next;
}


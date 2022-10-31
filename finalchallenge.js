Given a sorted linked list of unique integers, check if the list contains an element with a target value.

function solution(list, target) {
    let curr = list
    while(curr){
        if(curr.value === target){
            return true 
        }
        curr = curr.next
    }
    return false
  }
  Given an unsorted linked list, find the element with the highest value iteratively.

  function solution(list) {
    let maxValue = list.value
    while(list){
        if(list.value > maxValue){
            maxValue = list.value
        }
        list = list.next
    }
    return maxValue
 }
 
// Q. Given an array of positive integers, find the first element that occurs k number of times. If no element occurs k times, return -1, and you may assume k is greater than 0. 

// Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2

// • Given an array: [], k: 1 // returns -1

// Examples:
//keep count of the elements that is repeated, 
// then match with the k , if it matches k ,
//then return the element
//else return - 1
function findFirstRepeatedElement(input,k){
   let countMap = new Map();
   for(let el of input){
    let counts = (countMap.get(el )|| 1 ) + 0
    if(counts === k) return el;
    countMap.set(el,counts)

   }
   return - 1

}

console.log()
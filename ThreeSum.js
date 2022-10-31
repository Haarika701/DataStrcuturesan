// Approach: By Sorting the array the efficiency of the algorithm can be improved. This efficient approach uses the two-pointer technique. Traverse the array and fix the first element of the triplet. Now use the Two Pointers algorithm to find if there is a pair whose sum is equal to x – array[i]. Two pointers algorithm take linear time so it is better than a nested loop.
// Algorithm : 
// Sort the given array.
// Loop over the array and fix the first element of the possible triplet, arr[i].
// Then fix two pointers, one at i + 1 and the other at n – 1. And look at the sum, 
// If the sum is smaller than the required sum, increment the first pointer.
// Else, If the sum is bigger, Decrease the end pointer to reduce the sum.
// Else, if the sum of elements at two-pointer is equal to given sum then print the triplet and break.
function threeNumberSum(array, targetSum) {
    const res = []
    const sorted = array.sort((a,b) => a - b)
    for(let index = 0; index< sorted.length;index++){
      if(array[index] >= targetSum){
        break
      }
      let start = index + 1,end = sorted.length - 1
      while (start < end) {
        const sum = sorted[index] + sorted[start] + sorted[end];
        if(sum === targetSum){
          res.push([sorted[index] , sorted[start] , sorted[end]])
          start++;
        end--;
        }else if (sum < targetSum){
        start++;
      }else{
        end--;
      }
        
      }
    }
    return res;
}
// Method 3: This is a Hashing-based solution. 

// Approach: This approach uses extra space but is simpler than the two-pointers approach. Run two loops outer loop from start to end and inner loop from i+1 to end. Create a hashmap or set to store the elements in between i+1 to j-1. So if the given sum is x, check if there is a number in the set which is equal to x – arr[i] – arr[j]. If yes print the triplet. 
 
// Algorithm: 
// Traverse the array from start to end. (loop counter i)
// Create a HashMap or set to store unique pairs.
// Run another loop from i+1 to end of the array. (loop counter j)
// If there is an element in the set which is equal to x- arr[i] – arr[j], then print the triplet (arr[i], arr[j], x-arr[i]-arr[j]) and break
// Insert the jth element in the set.
// //let map = new Map()
// let result = [];
// for(let i in  array){
//   if(map.has(array[i])){
//     array[i] += 1
//   }else{
//     array[i] = 1
//   }
// }

// for(let i in array){
//   for(let j in array){
//     if (i !== j){
//       let targetSumDelta = targetSumDelta - (i + j){
//         if(targetSumDelta !== i && targetSum !== j && instanceof in map){
//           let sum = [i,j,targetSum]
//           sum.sort()
          
//         }
//       }
//     }
//   }
// }
// }
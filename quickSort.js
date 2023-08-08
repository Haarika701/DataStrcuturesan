/*
'''
❓ PROMPT
Quicksort is a divide-and-conquer sorting algorithm that works as follows:

1. Select any element of the list as the pivot.
2. Partition the array around this pivot, with the smaller values on the left and the larger values on the right. (Does this sound familliar? It should!)
3. Now that the pivot is in the right place in the array, you can recursively sort the sections on either side.

Write a function that implements quicksort on a list of integers and returns the sorted list.

Challenge: Do this in place without making copies of subarrays!

(Note: If you are familiar with this problem or you search for it on Google, you may run into an in-place implementation of it which involves shuffling elements of the list around rather than separating them into new lists. Though this is not necessary for this problem, feel free to give this a try if you'd like a challenge!)

Example(s)
quicksort([1, 3, 2]) == [1, 2, 3]
quicksort([0, 99, -1, 2]) == [-1, 0, 2, 99]
quicksort([0, 1, 0, 0, 0]) == [0, 0, 0, 0, 1]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 -ve and +ve integers 


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 
select a pivot element from the array 
use the pivit element to compare the smaller integers and large integers
recursively sort smaller int to the left of the pivot element and larger to the right 

📆 PLAN
Outline of algorithm #: 
 
 if array length is 1 return the array
 choose last element as pivot
 using two pointer approach - let first element be the left and second last be the right 
 looping through the first pointer comparing right 
   = inc left until a large elemnt or euqal is found
   = dec right untill a small element is found
   = if left is less than equal to right. swap the element
swap the pivot element with the element at position left 
recursively sort the left partition and right partition
return the sorted array 

🛠️ IMPLEMENT
function quicksort(array) {
def quicksort(array: List[int]) -> List[int]
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function quicksort(array) {
    // Base case: If the array has one element or is empty, it's already sorted
    if (array.length <= 1) {
      return array;
    }
  
    // Choose the pivot (last element in this case)
    const pivot = array[array.length - 1];
    let left = 0;
    let right = array.length - 2;
  
    // Partition the array
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
  
      while (array[right] > pivot) {
        right--;
      }
  
      if (left <= right) {
        // Swap elements at left and right positions
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
      }
    }
  
    // Swap the pivot with the element at the left pointer
    [array[left], array[array.length - 1]] = [array[array.length - 1], array[left]];
  
    // Recursively quicksort the left and right partitions
    const leftPartition = quicksort(array.slice(0, left));
    const rightPartition = quicksort(array.slice(left + 1));
  
    // Combine the left partition, pivot, and right partition to get the sorted array
    return [...leftPartition, array[left], ...rightPartition];
  }
  
  // Test cases
  console.log(quicksort([1, 3, 2])); // [1, 2, 3]
  console.log(quicksort([0, 99, -1, 2])); // [-1, 0, 2, 99]
  console.log(quicksort([0, 1, 0, 0, 0])); // [0, 0, 0, 0, 1]
  
console.log(quicksort([1, 3, 2]))

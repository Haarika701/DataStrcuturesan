 /*
'''
❓ PROMPT
Given an array, find the length of the smallest subarray in it which, when sorted, will sort the whole array.

Example(s)
Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted.

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted.
 

🔎 EXPLORE
State your assumptions & discoveries:
can contain negative elements in the subarray
 ascending order
 if sorted return 0

Create examples & test cases:
 null or empty
1-element
2 adjacent elements are unsorted
2 distant elements are unsorted
N-element unsorted array
sorted array

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 [1, 2, 5, 3, 7, 10, 9, 12]
  &                      *
  i < i + 1 
    true, that means it is sorted
    else 
       end = i

iterate over the array from left and right end of the array
 compare the adjacent elements to see if its sorted
    
📆 PLAN
High-level outline of approach #: 
 initialize min and max
 find firtst value which is in decreasing order
 and find max increasing order
   find the part that is unsorted 
   find index in left for a no greater than the min found
     foind index in right ofr less than the max_bound
     calculate the length of the part 
       = right - left + 1

🛠️ IMPLEMENT
function shortestWindowSort(arr) {
def shortestWindowSort(arr: list[int]) -> int:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/

function findUnsortedSub(nums){
   let min = Integer.MAX_VALUE
   let  max=Integer.MIN_VALUE
    for(let i = 1; i < nums.length;i++){
     if(nums[i] < nums[i - 1]){
        min = Math.min(min,nums[i])
     }
    }

    for(let i = n - 2; i > 0 ;i++){
        if(nums[i]> nums[i + 1]){
            max =  Math.max(max,nums[i])
        }
    }

    if(min === Integer.MAX_VALUE && max === Integer.MIN_VALUE) return 0;
    let start = 0 ; 
    let end = n - 1;
    for(;start < n; start++){
        if(nums[start] > min) break;

    }

    for(;end>=0;end--){ // finding end point
        if(nums[end]<max) break; // find index in the right for a no. lesser than the max found
    }
    return end-start+1;
}

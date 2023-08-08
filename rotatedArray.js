/*
'''
❓ PROMPT
Given an array of integers and an integer K, find the Kth largest value in the array. You can assume that K is always smaller than the length of the array.

Example(s)
findKthLargest([3,2,1,5,6,4], 2) == 5
findKthLargest([1,1,5,3,2,9], 4) == 2
 

🔎 EXPLORE
State your assumptions & discoveries:
 

Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
function findKthLargest(nums, k) {
def findKthLargest(nums: list[int], k: int) -> int:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/
function findKthLargest(nums, k) {
    nums.sort()
    return nums[nums.length - k]
}

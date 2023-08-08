/*
'''
❓ PROMPT
Given an array of ints, compute recursively the number of times that the value 6 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

Example(s)
array6([1, 2, 6], 0) == 1
array6([6, 6], 0) == 2
array6([1, 2, 3, 4], 0) == 0
 

🔎 EXPLORE
List your assumptions & discoveries:
 no negative 
 find the number of 6s in an array using recursion

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 recursive call stack goes through each element all the time it finds the number 6.

📆 PLAN
Outline of algorithm #: 
 base case 
 if element matches the length of the array => 0 
 if nums[i] matches 6
 if it does , add 1 or return 0


🛠️ IMPLEMENT
function array6(nums, index) {
def array6(nums: list[int], index: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function array6(num,i = 0){
    if(index >)
}
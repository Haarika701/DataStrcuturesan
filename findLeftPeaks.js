/*
'''
❓ PROMPT
Given an array of integers, return a sub-array of 'Left Peaks'. A Left Peak is defined as an element that is greater or equal in value to all elements to its right.

Example(s)
find_left_peaks([1, 2, 5, 3, 1, 2]) => [5, 3, 2]
find_left_peaks([3, 2, 1]) => [3, 2, 1]
 

🔎 EXPLORE
List your assumptions & discoveries:
 duplicate peaks 
 return an empty list 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 create a result array to store the left peak 
 iterate through the array 
 for each element pop oout the elements in the stacj which are smaller than the current elements 
 append the element to the stack 
 at the end, the stack should contain only left peaks 
 return the stack 

🛠️ IMPLEMENT
function find_left_peaks(arr) {
def find_left_peaks(arr: list[int]) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function find_left_peaks(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        while (result.length > -1 && arr[i] > result.at(-1)) {
            result.pop()
        }
        result.push(arr[i])
    }
    return result
}
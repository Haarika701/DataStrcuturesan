/*
'''
❓ PROMPT
Given an array of positive integers (greater than 1), and a target value, count the number of ways the target value can be created by concatenating pairs of values from the array. 

Example(s)
numbers = [1, 11, 12, 121, 21]
target = 1121

The result is 2 because there are two pairs that can be concatenated to make 1121, (11, 21) and (1, 121).

Possible combinations named by prefix and postfix for target: 1121

1.
Prefix: 1
Postfix: 121

2.
Prefix: 11
Postfix: 21

3.
Prefix: 112
Postfix: 1

 
numbers = [1, 11, 12, 121, 21]
convert numbers and target into strings
['1',"11",'12','121','21']
prefixPostfix = {} => to keep track of the visited number
count = {} => keep track of the count of the combinations
iterate through the target length
pre = 1 + (0,i)
post = 121+[i]
target = 1121

count = {}
for(const number of Object.keys(counts)
)
for postfix = prepost[number]
prefix : 1
postfix 121





Test Case 1: One number with impossible target.
Test Case 2: List with two same numbers.
Test Case 3: List with three numbers all the same.
Test Case 4: List with multiple numbers with two unique digits.
Test Case 5: List with many variations of numbers using a single digit.
🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function waysToMake(numbers, target) // return a number
def ways_to_make(numbers: list, target: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function waysToMake(numbers,target){
    numbers = numbers.map((x) => x + "");
    target = target + ""

    const prepost = {}
    for(let i = 1; i < target.length; i++){
        const pre = target.substring(0,i)
        const post = target.substring(i)
        prepost[pre] = post;
    }

    const counts = {}
    for(const number of numbers){
        counts[number] = (counts[number] || 0) + 1
    }
    let count = 0;
    for(const number of Object.keys(counts)){
        const postfix = prepost[number]
        if(counts[postfix]){
            if(number === postfix){
                count += counts[postfix] * (counts[postfix] - 1)
            }else{
                count += counts[postfix] * counts[number]
            }
        }
    }
    return count;
}

/* Approach 2
*/
/*
'''
❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1
 

🔎 EXPLORE
List your assumptions & discoveries:
 string can be empty
 different characters

Insightful & revealing test cases:
 countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function countSkippedPairs(word) {
def countSkippedPairs(word: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function countSkippedPairs(str) {
    if (str.length <= 2) return 0;
    if (str[0] === str[2]) {
        return 1 + countSkippedPairs(str.substring(1))

    }
    return countSkippedPairs(str)
}

countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1
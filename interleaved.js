/*
'''
❓ PROMPT
Given two strings *x* and *y* we can create an interleaving by repeatedly taking the first character of either and appending the characters together to form a new string. Specifically, valid interleavings will have these properties:

1. len(interleaving) == len(x) + len(y)
2. *interleaving - x = y* and *interleaving - y = x* meaning that removing the characters in *x* from the interleaving will produce *y* and vice versa.
3. x and y both appear as subsequences in the interleaving. The order of characters in x and y are preserved in the interleaving.

Given *x*, *y*, and *s*, write a function that determines whether *s* is a valid interleaving of *x* and *y*.

Example(s)
These are some valid interleaving using the strings *ABC* and *BCD*:

isInterleaving("ABC", "BCD", "BABCCD") == True
Explanation:
 x:             AB C
 y:            B  C D
 interleaving: BABCCD

isInterleaving("ABC", "BCD", "ABCBCD") == True
Explanation:
 x:            ABC
 y:               BCD
 interleaving: ABCBCD

isInterleaving("ABC", "BCD", "BCDABC") == True
Explanation:
 x:               ABC
 y:            BCD
 interleaving: BCDABC

isInterleaving("ABC", "BCD", "BCABDC") == True
Explanation:
 x:              AB C
 y:            BC  D
 interleaving: BCABDC

isInterleaving("ABC", "BCD", "BABCDD") == False
Explanation:
BABCDD cannot be created from the any combination of the sequences ABC & BCD
 

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
function isInterleaving(x, y, s) {
def isInterleaving(x: str, y: str, s: str) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function isInterleaving(x, y, s) {
    if (x.length + y.length !== s.length)
        return false

    if (x === '' && y === '')
        return s.length === 0

    let foundMatch = false

    if (x.length !== 0 && s[0] === x[0])
        foundMatch ||= isInterleaving(x.slice(1), y, s.slice(1))

    if (y.length !== 0 && s[0] === y[0])
        foundMatch ||= isInterleaving(x, y.slice(1), s.slice(1))

    return foundMatch
}

console.log(isInterleaving("XXXXX", "YYYYY", "shorter") === false)
console.log(isInterleaving("X", "Y", "longer") === false)
console.log(isInterleaving("X", "Y", "XY") === true)
console.log(isInterleaving("X", "Y", "YX") === true)
console.log(isInterleaving("X", "Y", "XX") === false)
console.log(isInterleaving("X", "Y", "YY") === false)
console.log(isInterleaving("ABC", "D", "ABCD") === true)
console.log(isInterleaving("ABC", "D", "ABDC") === true)
console.log(isInterleaving("ABC", "D", "ADBC") === true)
console.log(isInterleaving("ABC", "D", "DABC") === true)
console.log(isInterleaving("AABCC", "DBBCA", "AADBBCBCAC") === true)
console.log(isInterleaving("ABC", "BCD", "BABCCD") === true)
console.log(isInterleaving("ABC", "BCD", "ABCBCD") === true)
console.log(isInterleaving("ABC", "BCD", "BCDABC") === true)
console.log(isInterleaving("ABC", "BCD", "BCABDC") === true)
console.log(isInterleaving("ABC", "BCD", "BABCDD") === false)
console.log(isInterleaving("ABC", "BCD", "ABBCCD") === true)
console.log(isInterleaving("ABC", "BCD", "DCCBBA") === false)
console.log(isInterleaving("ABC", "BCD", "ABBDCC") === false)
console.log(isInterleaving("ABC", "BCD", "ACBBCD") === false)
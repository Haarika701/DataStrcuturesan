/*
'''
❓ PROMPT
Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

Example(s)
parenBit("xyz(abc)123") == "(abc)"
parenBit("x(hello)") == "(hello)"
parenBit("(xy)1") == "(xy)"
 

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
function parenBit(word) {
def parenBit(word: str) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function parenBit(word){
   function helper(l,r){
    if(word[l] === '(' && word[r] === ')'){
        return word.slice(l,r + l)
    }

    return helper(
        word[l] === '(' ? l : l + 1,
        word[r] === ')'? r : r - 1,
    )
   } 

   return helper(0,word.length - 1)
}
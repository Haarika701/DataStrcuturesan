/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

high level approach 
need to find opening brackets matchibf closing parenthsis, check the order 



stack 
openign brackets 
closing brackets 
matchibg brakets = {}
()[]{}
$            if openign matches bracket , 
[(,]
    if it matches with the matching bracket pop 
    return  ttrue 
   if popped element does not match matching bracket 
   return false


*/

function isValid(s){
    let stack = []
    let matchingBracket = {')' :'(','}':'{',']' :'['}
    let openignBrackets = '([{';
    for(let bracket of s){
        if(openignBrackets.includes(bracket)){
            stack.push(bracket)
        }else if (bracket in matchingBracket){
           let  result = stack.pop()
           if(result !== matchingBracket[bracket]) return false
        }
    }
    return stack.length === 0
}

console.log(isValid('(]'))
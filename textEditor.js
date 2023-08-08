/*
'''
❓ PROMPT
Write a function to simulate the undo operation in a text editor and outputs the final text after applying all of the commands. The editor supports the following three commands:

"append <char>": Append the character <char> to the end.

"backspace": Delete the last character.

"undo": Undo the most recent change to the document.

The "undo" command should revert the most recent change made to the text. Meaning if the most recent command was "append", it should remove that character. If the subsequent command was "backspace", it should add the character back in.

Example(s)
commands = ["append a", "append b", "backspace", "append c", "undo", "append d", "undo", "append e"]

Output: "ae"

Explanation:
* append a: appends "a"
* append b: appends "b"
* backspace: removes "b"
* append c: appends "c"
* undo: removes "c"
* append d: appends "d"
* undo: removes "d"
* append e: appends "e"
 

🔎 EXPLORE
List your assumptions & discoveries:
 
append => push 
backspace => pop
undo => keep track of the word that was entrered in the text 
and pop if its already tracked
Insightful & revealing test cases:
 if no cmd given, then return empty
and no number of undos will return an error as many undos as the function maybe till the string is empty


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 operations are performed on each chara of a string and hence o(n)


📆 PLAN
Outline of algorithm #: 
 Iterate through the list of commands and for each action 'backspace', 'undo', 'append' do some actions.
'backspace' Remove last character from the text, and store action and character in a 'history'
'undo' get the most recent action and char from 'history' and determine what to do between append and backspace
'append' add the char to 'test' and store action to 'history'


🛠️ IMPLEMENT
function simulateEditor(commands) {
def simulateEditor(commands: list[str]) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function simulateUndo(commands) {
    let text = [] //to store the text for append and pop
    let history = [] // to store the history of chars for undo operation
    // Iterate through the list of commands and for each action 'backspace', 'undo', 'append' do some actions.
    for (let cmd of commands) {
        if (cmd === 'backspace') {
            if (text.length > 0) {
                history.push(["backspace", text.pop()]);
            }
        } else if (cmd === 'undo') {
            if (text.length > 0) {
                const [action, char] = history.pop();

            } else if (action === 'append') {
                text.pop()
            } else if (action === "backspace") {
                text.push(char)
            } else {
                const [action, char] = cmd.split("")
                text.push(char)
                history.push(["append", char])
            }
        }

    }
    return text.join("")
    // 'backspace' Remove last character from the text, and store action and character in a 'history'
    // 'undo' get the most recent action and char from 'history' and determine what to do between append and backspace
    // 'append' add the char to 'test' and store action to 'history'


}

// Test Case 1: Basic operations
console.log(simulateUndo(["append a", "append b", "append c", "backspace", "undo"]) === "abc");

// Test Case 2: Multiple undos
console.log(simulateUndo(["append a", "append b", "append c", "backspace", "undo", "undo"]) === "ab");

// Test Case 3: Empty input
console.log(simulateUndo([]) === "");

// Test Case 4: Complex operations
console.log(simulateUndo(["append a", "append b", "backspace", "append c", "undo", "append d", "undo", "append e"]) === "ae");

// Test Case 5: Undo with no history
console.log(simulateUndo(["undo"]) === "");

// Test Case 6: Backspace with empty text
console.log(simulateUndo(["backspace"]) === "");

// Test Case 7: Multiple backspaces
console.log(simulateUndo(["append a", "append b", "append c", "backspace", "backspace"]) === "a");

// Test Case 8: Undo after multiple backspaces
console.log(simulateUndo(["append a", "append b", "append c", "backspace", "backspace", "undo", "undo"]) === "abc");

// Test Case 9: Continuous undos and backspaces
console.log(simulateUndo(["append a", "append b", "append c", "undo", "undo", "undo", "backspace", "backspace", "backspace", "append d", "append e", "append f"]) === "def");
/*
'''
❓ PROMPT
Given a list of words *L* and a maximum password length *maxLength*, generate all valid human-friendly passwords using *L* that are at most *maxLength* long with the following rules. This was inspired by https://xkcd.com/936/

We can generate a human-friendly password by concatenating several words from a list of words (e.g. *correct horse battery staple*). Define a human-friendly password to be a string made up of words such that:

1. The password is comprised of only words from the list
2. Each word is separated by a space between them
3. Each word is used at most once
4. The password is can be at most *maxLength* long when including spaces.

Example(s)
These are valid human-friendly passwords generated from the list:
[apple, bat, cheese, dog]
- apple bat cheese dog
- apple cheese bat
- dog apple
- cheese bat dog

However, there's a maxLength value that can be passed in that limits the possible combinations:
generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 10) ==
[
  "apple",
  "dog",
  "zebra",
  "apple dog",
  "dog apple",
  "dog zebra",
  "zebra dog"
]
"zebra apple" and "apple zebra" are skipped because they're 11 chars.
 

🔎 EXPLORE
List your assumptions & discoveries:
 maxlenght should be greater than the shorter word
 maxLength = 10
 words are unique
 


Insightful & revealing test cases:
 maxLength is 0
maxLength equals the shortest word
maxLength is slightly greater than the shortest word
maxLength equals the length of the two shortest words with a space
maxLength is greater than the length of all the words in the list with spaces
empty list
1 word list
2 word list
list with multiple words

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

["apple", "dog", "zebra"]
w 

0 > maxlength => return 



count => keep track of the un used words
result [] to push the s
initial totallength = 0 

total length > maxlength return

itertae through thr string of array

check if the words have been used or not, if not
push the word to the stack 
and update the count


📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function generateAllHumanFriendlyPasswords(words, maxLength) {
def generateAllHumanFriendlyPasswords(words: list[str], maxLength: int) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function generateAllHumanFriendlyPasswords(words, maxLength) {
    const passwords = [];
    const stack = [];
    let totalLength = 0;
    const counts = {};

    function addWord() {
        if (totalLength > maxLength)
            return; // no need to proceed further

        if (totalLength > 0 && totalLength <= maxLength)
            passwords.push(stack.join(' '));

        for (const w of words) {
            // only use un-used words
            const count = counts[w] || 0;

            if (count === 0) {
                // use the word and mark it as used
                stack.push(w);
                counts[w] = 1;
                // account for the space after the first word
                const charsAdded = totalLength === 0 ? w.length : w.length + 1;
                totalLength += charsAdded;

                // repeat on another word
                addWord();

                // remove the word and unmark it 
                totalLength -= charsAdded;
                counts[w]--;
                stack.pop();
            }
        }
    }

    addWord();

    return passwords;
}

console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    [], 0)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    [], 5)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["horse"], 0)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["horse"], 4)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["horse"], 5)) === JSON.stringify(["horse"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["horse"], 10)) === JSON.stringify(["horse"]))

console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 0)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 1)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 3)) === JSON.stringify(["dog"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 5)) === JSON.stringify(
        ["apple", "dog", "zebra"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 8)) === JSON.stringify(
        ["apple", "dog", "zebra"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 9)) === JSON.stringify(
        ["apple", "apple dog", "dog", "dog apple", "dog zebra", "zebra", "zebra dog"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 10)) === JSON.stringify(
        ["apple", "apple dog", "dog", "dog apple", "dog zebra", "zebra", "zebra dog"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 11)) === JSON.stringify(
        ["apple", "apple dog", "apple zebra", "dog", "dog apple", "dog zebra", "zebra", "zebra apple", "zebra dog"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
    ["apple", "dog", "zebra"], 20)) === JSON.stringify(
        ["apple", "apple dog", "apple dog zebra", "apple zebra", "apple zebra dog", "dog", "dog apple", "dog apple zebra", "dog zebra", "dog zebra apple", "zebra", "zebra apple", "zebra apple dog", "zebra dog", "zebra dog apple"]))
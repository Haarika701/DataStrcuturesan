// A pangram is a sentence that contains every letter of the alphabet. The goal of this function is to determine if the sentence given is a pangram or not. If it is not a pangram, the function will return not pangram. If it is a pangram, the function will return pangram. 

//example : "The quick brown fox jumps over the lazy dog"
//example2 : "We promptly judged antique ivory buckles for the prize"

/* we will itratw through the string and match if there are any characters missed from atoz,if all letters are present , then it is anagram, if not thnen it is not.

 */

function pangram(s){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex,"")
    for(let i = 0; i < alphabet.length;i++){
        if(lowercase.indexOf(alphabet[i] === -1)){
            return "not panagram"
        }
    }
    return "pangram"
}
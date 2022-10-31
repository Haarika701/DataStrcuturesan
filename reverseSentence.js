//iterate through the array, 
//reverse the letters of the wordd
//swap the positions of the words
//reverse the words using helper function

function reverseWords(sentence) {
  const words = sentence.split(' ').filter(s => s !== '');

  let i = 0, j = words.length - 1;

  while (i < j) {
    [words[i], words[j]] = [words[j], words[i]];
    i++;
    j--;
  }
  return words.join(' ');
}

//Javascript Solution for this one in case there isn't one yet...

// Approach

// - for each letter in the input
// - build up each word individually character by character
// - if you reach an empty space character you've found the end of a word or the end of the entire input
// - save the completed words without spaces in an array;
// - declare an empty string result
// - iterate in reverse through the array of words that you saved
// - for the first word just add it to the result
// - for each additional word append an empty space to the front
// - return the result

 function reverseWords(s) {
  const wordsWithoutSpaces = [];
  let word = "";
  
  for (let i = 0; i < s.length; i++) {
      // skip empty spaces
      if (s[i] !== " ") {
          // if you reach the end of the input OR the end of a word
          if(i + 1 >= s.length || s[i + 1] === " ") {
              word += s[i];
              wordsWithoutSpaces.push(word);
              word = "";
              continue;
          }
          
          word += s[i];
      }
  }
  
  let result = "";
  
  for (let i = wordsWithoutSpaces.length - 1; i >= 0; i--) {
      if (i === wordsWithoutSpaces.length - 1) {
          result += wordsWithoutSpaces[i];
      } else {
          result += " " + wordsWithoutSpaces[i];
      }
  }
  
  return result;
};

console.log(reverseWords("the sky is blue") == "blue is sky the");
console.log(reverseWords("  hello world  ") == "world hello");
console.log(reverseWords("a good   example") == "example good a");
console.log(reverseWords("a") == "a");
console.log(reverseWords("  a") == "a");
console.log(reverseWords("a  ") == "a");
console.log(reverseWords("  a  ") == "a");
console.log(reverseWords("word") == "word");
console.log(reverseWords("  formation  is   essential ") == "essential is formation");
console.log(reverseWords("engineering    method  ") == "method engineering");`
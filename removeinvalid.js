function removeInvalidParentheses(str) {
    const stack = [];
    const output = [];
    const dedup = new Set();
  
    function helper(index) {
      // Is this a base case
      if (index >= str.length) {
        //  is there any extra work?
        // Only add valid strings, that are as long as possible.
        // Don't add a valid string if it is shorter than what we've already added.
        if (isValidParens(stack) && (output.length === 0 || output[0].length === stack.length)) {
          const valid = stack.join('');
          if (!dedup.has(valid)) {
            output.push(valid);
            dedup.add(valid);
          }
        }
        return;
      }
  
      // Explore all possible choices from here
      // 1. Take the char
      stack.push(str[index]);
      helper(index + 1); //  recursive call
      stack.pop();
  
      // 2. Don't take the char
      helper(index + 1);
  
      // do we need to return anything. No.
    }
  
    helper(0);
  
    return output;
  }
  
  console.log(removeInvalidParentheses("(()()))"));
  
  
/*
'''
❓ PROMPT
Implement a basic stack class using an linked list as the underlying storage. Stacks have two critical methods, push() and pop() to add and remove an item from the stack, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the stack. All of these methods should run in O(1) time!

Remember, a stack is a last in, first out data structure!

A singly linked list is a simple way to create a stack. The head of the list is the top of the stack.

Example(s)
const stack = new LLStack();
console.log(stack.size()) // 0
stack.push(2);
stack.push(3);
console.log(stack.size()) // 2
console.log(stack.pop()); // 3
console.log(stack.size()) // 1
console.log(stack.pop()); // 2
 

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
class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LLStack {
  constructor() {} // initialize the stack to be empty

  push(newValue) {} // Adds a new value to the stack

  pop() {} // Removes the top value from the stack and returns it

  size() {} // returns the current size of the stack
}
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class LLNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LLStack {
    constructor() {
      this.count = 0;
      this.top = new LLNode("top");
    }
  
    push(newValue) {
      const newNode = new LLNode(newValue, this.top.next);
      this.top.next = newNode;
      this.count++;
    }
  
    pop() {
      if (this.count === 0) {
        return undefined; // or throw exception?
      }
      const node = this.top.next;
      this.top.next = node.next;
      node.next = null;
      this.count--;
      return node.value;
    }
  
    size() {
      return this.count;
    }
  }
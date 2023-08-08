/*
'''
❓ PROMPT
Implement a basic queue class using a linked list as the underlying storage. Queues have two critical methods, enqueue() and dequeue() to add and remove an item from the queue, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the queue. All of these methods should run in O(1) time!

Remember, a queue is a first-in, first-out (or last-in, last-out) data structure!

A doubly linked list is one of the simplest ways to implement a queue. You'll need both a head and tail pointer to keep track of where to add and where to remove data. Using a doubly linked list means you can do both operations without walking the whole list and all modifications of the list are at the ends.

Example(s)
q = new LLQueue();
console.log(q.size()) // 0
q.enqueue(2);
q.enqueue(3);
console.log(q.size()) // 2
console.log(q.dequeue()); // 2
console.log(q.size()) // 1
console.log(q.dequeue()); // 3
 

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
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LLQueue {
  constructor() {}

  enqueue(newValue) {}

  dequeue() {}

  size() {}
}
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
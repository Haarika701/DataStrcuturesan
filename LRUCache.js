class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map();
      this.list = new DoublyLinkedList();
    }
  
    get(key) {
      if (!this.map.has(key)) {
        return -1;
      }
  
      const node = this.map.get(key);
  
      this.list.remove(node);
  
      this.map.set(key, this.list.push(key, node.value));
  
      return node.value;
    }
  
    put(key, value) {
      if (this.map.has(key)) {
        this.list.remove(this.map.get(key));
      }
  
      this.map.set(key, this.list.push(key, value));
  
      if (this.list.length > this.capacity) {
        this.map.delete(this.list.head.key);
        this.list.remove(this.list.head);
      }
    }
  }
  
  class DoublyLinkedListNode {
    constructor(key = null, value = null) {
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(key, value) {
      const node = new DoublyLinkedListNode(key, value);
  
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
  
      this.length += 1;
  
      return node;
    }
  
    remove(node) {
      if (!node.next && !node.prev) {
        this.head = null;
        this.tail = null;
      } else if (!node.next) {
        this.tail = node.prev;
        this.tail.next = null;
      } else if (!node.prev) {
        this.head = node.next;
        this.head.prev = null;
      } else {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
      }
  
      this.length -= 1;
    }
  }
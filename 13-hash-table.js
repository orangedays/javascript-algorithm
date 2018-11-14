const LinkedList = require('./10-linked-list');

class HashTable {
  constructor() {
    this.arr = new Array(10);
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = new LinkedList();
    }
  }

  set(value) {
    const hashCode = this.hashCode(value);
    this.arr[hashCode].push(value);
  }

  get(value) {
    const hashCode = this.hashCode(value);
    let head = this.arr[hashCode].head;
    if (!head) {
      return null;
    }
    while (head && (head.value !== value)) {
      head = head.next;
    }
    return head && head.value;
  }

  hashCode(value) {
    return value % 10;
  }

  toString() {
    let str = '';
    this.arr.forEach(item => {
      str += ` ${item.toString()} `;
    })
    return str;
  }
}
class Node {
  constructor (value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value, after) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    let afterNode;
    if (after) {
      afterNode = this.find(after);
    } else {
      afterNode = this.tail;
    }
    if (!afterNode)  {
      return;
    }
    const nodeNext = afterNode.next;
    afterNode.next = newNode;
    newNode.prev = afterNode;
    if (nodeNext) {
      newNode.next =nodeNext;
      nodeNext.prev = newNode;
    } else {
      this.tail = newNode;
    }
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  pop() {
    if (!this.head) {
      console
      return null;
    } else {
      const node = this.tail;
      if (this.tail.prev) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        this.head = this.tail = null;
      }
      return node.value;
    }

  }

  remove(value) {
    const node = this.find(value);
    if (!node) {
      return;
    }
    if (!node.prev) {
      console.log('hit')
      node.next.prev = null;
      this.head = node.next; 
    } else if (!node.next) {
      console.log('hit')
      node.prev.next = null;
      this.tail = node.prev;
    } else {
      console.log('hitc', node.value)
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let cur = this.head;
    if (cur.value === value) {
      return cur;
    }
    while(cur.next) {
      if (cur.next.value === value) {
        return cur.next
      }
      cur = cur.next
    }
    return null;
  }

  toString() {
    if (!this.head) {
      return '';
    }
    let cur = this.head;
    let string = cur.value.toString();
    while(cur.next) {
      string += cur.next.value.toString();
      cur = cur.next;
    }
    return string;
  }

  print() {
    while(this.head) {
      console.log(this.pop())
    }
  }
}
function test() {
  const linkedList = new LinkedList();
  linkedList.insert(8);
  linkedList.insert(1);
  linkedList.insert(5);
  linkedList.insert(6);
  linkedList.insert(7);
  linkedList.insert(0);
  linkedList.push(99)
  console.log(linkedList.toString());
}
// test();

module.exports = LinkedList;

// 8 1 5 6 7 0
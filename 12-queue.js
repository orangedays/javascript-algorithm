 const LinkedList = require('./10-linked-list');

 class Queue extends LinkedList {
   constructor() {
     super();
   }

   shift() {
     if (!this.head) {
       return null;
     }
     const shiftNode = this.head;
     this.head = shiftNode.next;
     if (this.head) {
       this.head.prev = null;
     } else {
       this.tail = null;
     }
   }
 }
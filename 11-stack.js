const LinkedList = require('./10-linked-list');

class Stack  {
  constructor() {
    return new LinkedList();
  }
}

function test() {
  const str = '{{{{{{{}}}}}';
  const stack = new Stack();
  for (var i = 0; i < str.length; i++) {
    const value = str[i];
    if(value === '{') stack.push(i);
    if(value === '}') stack.pop();
  }
  console.log(stack.toString());
}

test();
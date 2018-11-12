class Node {
  constructor(value, parent, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value, null, null, null);
    if (!this.root) {
      this.root = node;
      return;
    }
    let parent = this.root;
    let found = false;
    while(!found) {
      if (value < parent.value) {
        if (!parent.left) {
          parent.left = node;
          node.parent = parent;
          found = true;
        } else {
          parent = parent.left;
        }
      } else if (value > parent.value) {
        if (!parent.right) {
          parent.right = node;
          node.parent = parent;
          found = true;
        } else {
          parent = parent.right;
        }
      }
    }
  }

  remove(value) {
    let node = this.search(value);

    // 为根结点
    if (!node.parent) {
      this.root = null;
      return;
    }

    // 没有子节点
    if (!node.left && !node.right) {
      if (node.value < node.parent.value) {
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }
    } else if (node.left && node.right) {
      // 有两个节点
      if (node.value < node.parent.value) {
        node.parent.left = node.right;
        node.right.parent = node.parent
        const leftNode = this.searchLeftNode(node.right);
        leftNode.left = node.left;
        node.left.parent = leftNode;
      } else {
        node.parent.right = node.left;
        node.left.parent = node.parent
        const rightNode = this.searchRightNode(node.left);
        rightNode.right = node.right;
        node.right.parent = rightNode;
      }
    } else if (node.left && !node.right) {
      // 有一个左节点
      if (node.value < node.parent.value) {
        node.parent.left = node.left;
        node.left.parent = node.parent;
      } else {
        node.parent.right = node.left;
        node.left.parent = node.parent;
      }
    } else if (!node.left && node.right) {
      // 有一个右节点
      if (node.value < node.parent.value) {
        node.parent.left = node.right;
        node.right.parent = node.parent;
      } else {
        node.parent.right = node.right;
        node.right.parent = node.parent;
      }
    }
  }

  search(value) {
    let parent = this.root;
    if (!parent) {
      return null;
    }
    let node = null;
    while(!node) {
      if (parent.value === value) {
        node = parent;
      } else if (parent.value < value) {
        parent = parent.left;
      } else {
        parent = parent.right;
      }
    }
    return node;
  }

  searchLeftNode(node) {
    if (!node.left) {
      return node;
    } else {
      return this.searchLeft(node.left);
    }
  }

  searchRightNode(node) {
    if (!node.right) {
      return node;
    } else {
      return this.searchRightNode(node.right);
    }
  }

  height(node = this.root){
    if(!node) return 0;
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
 }
}


function test () {
  const BST = new BinaryTree();
  BST.insert(7);
  BST.insert(13);
  BST.insert(3);
  BST.insert(1);
  BST.insert(5);
  BST.insert(6);
  BST.insert(15);
  BST.insert(14);
  BST.insert(12);
  BST.insert(11);
  console.log(BST);
}
test();
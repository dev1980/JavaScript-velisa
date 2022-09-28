//Binary Tree - Tree with maximum of two children or no of child in each node is not more than two
//that is called binary tree.

// BST (Binary search tree) - In binary search tree left child is always less than a parent and right child.
//why are BST very usefull (In bst we can find element easily)

//implement BST

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  //size

  size() {
    return this.count;
  }
  //adding node (insert)

insert(value) {
    this.count++;
    let newNode = new Node(value);

    // recursive function
    const searchTree = (node) => {
      // if value < node.value , go left

      if (value < node.value) {
        // if no child then append
        if (!node.left) {
          node.left = newNode;
        }
        // if there is left child then look left again
        else {
          searchTree(node.left);
        }
      }

      // if the value > node.value

      else if (value > node.value) {
        // if no node then append
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  //find min number

  min() {
    // only search left

    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  // find max value

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // searching in BST
  // 3 - 2 - 12 (15),  (36) -28 - 39
  // depth first search

  // a. in-order (left, root, right (2,3,12,15,28,36,39))

  dfsInOrder() {
    let reuslt = [];

    const traverse = (node) => {
      // if left child exist

      if (node.left) traverse(node.left);
        reuslt.push(node.value);
      
      // if right child exist
      if (node.right) traverse(node.right);
   
    };
    traverse(this.root);
    return reuslt;
  }

  //pre-order (root ,left, right)
  // (15, 3,2, 12, 36, 28, 39)

  dfsPreOrder() {
    let reuslt = [];
    const traverse = (node) => {
      // capture the root node first
      reuslt.push(node.value);
      // if the left child exist
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return reuslt;
  }

  // post order (left, right, root)

  dfsPostOrder() {
    let reuslt = [];
    const traverse = (node) => {
      // if the left child exist
      if (node.left) traverse(node.left);

      //if right child exist
      if (node.right) traverse(node.right);

      // capture the root node first
      reuslt.push(node.value);
    };

    traverse(this.root);
    return reuslt;
  }

//bfs - > breath first search - level by level search
  bfs() {
    let result = [];
    let queue = [];
    queue.push(this.root);

    while(queue.length) {
        let currentNode = queue.shift();
        result.push(currentNode.value)
        if(currentNode.left) {
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }

    return result;
  }
}


const bst = new BST(15);
bst.insert(3);
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)
console.log(bst)

console.log(bst.dfsInOrder())
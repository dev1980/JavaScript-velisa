class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add to end of the list / tail
  append(value) {
    let node = new Node(value);
    // if the list empty
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      let oldTail = this.tail;
      this.tail = node;
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  //add to the begining of the list / head
  prepend(value) {
    //if the list is empty

    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    // if list is empty
    if(!this.head) {
        return null
    }else {
        let removedHead = this.head
        if(this.head === this.tail) {
            this.head = this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        return removedHead.value
    }
  }

  deleteTail() {
    //if list is empty

    if(!this.tail){
        return null
    }else {
        let removedTail = this.tail;
        //if 1 node left

        if(this.head === this.tail){
            this.head = this.tail = null
        }else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        return removedTail.value;
    }
  }

search(value) {
    let currentNode = this.head
    while(currentNode) {
        if(currentNode.value === value) {
            return currentNode
        }
        currentNode = currentNode.next
    }
    return null
}

}

list = new Linkedlist();

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.prepend(-1)


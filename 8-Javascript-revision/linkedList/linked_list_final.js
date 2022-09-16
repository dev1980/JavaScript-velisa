class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0; //
  }

  // insert First head: {400, next: {200, next: {data: 100, next: null}}}
  // insert First current: {400, next: {200, next: {data: 100, next: null}}}

  insertFist(data) {
    let node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }

  // insert to the last of the node

  insertLast(data) {
    let node = new Node(data); // {data: 400, next: null}
    let current;

    // if there is no head, make a head first
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  // insert at given index

  insertAt(data, index) {
    //if index is out of range
    if (index < 0 && index > this.size) {
      return console.log("Please enter a valid index.");
    }

    //when index is 0
    if (index === 0) {
      this.insertFist(data);
      return;
    }

    //when index is grater than 0

    let node = new Node(data); // {data: 1000, next: null}

    let curr, prev;

    curr = this.head;
    let count = 0;
    while (count < index) {
      prev = curr; // to keep track of prev node
      count++;
      curr = curr.next; // keep moving to next node
    }

    node.next = curr;
    prev.next = node;

    this.size++;
  }

  //find the node at give index

  findAt(index) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (count === index) {
        console.log(curr.data);
      }
      count++;
      curr = curr.next;
    }

    return null;
  }
  // remove object from given index

  removeAt(index) {
    //if index is out of range
    if (index < 0 && index > this.size) {
      return console.log("Please enter a valid index.");
    }

    let curr = this.head;
    let count = 0;
    let prev;

    // remove with index 0 else while loop

    if (index === 0) {
      this.head = curr.next;
    } else {
      while (count < index) {
        count++;
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.size--;
  }

  // print list 
printList(){
let curr = this.head;
while(curr){
    console.log(curr.data);
    curr = curr.next;
}
}

 // clear list

 clearList(){
    this.head = null;
    this.size = 0
 }

}

const list = new LinkedList();

list.insertFist(100);
list.insertFist(50);
list.insertLast(300);
list.insertLast(500);
list.insertLast(600);

list.insertAt(400, 3);

list.removeAt(4)

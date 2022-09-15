class Node {
    constructor(data, next= null) {
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor(){
       this.head = null;
    }
//Insert operation on a singly linked list
insertAtBeginning(data){
    // A newNode object is created with property data and next = null
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
}

insertAtEnd(data){
    let newNode = new Node(data);
    if(!this.head){
        this.head = newNode;
        return this.head;
    }
    let tail = this.head;
    while(tail.next !== null){
         tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
}

deleteFirstNode() {
    if(!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
}
}


// A list object is created with a property head, currently pointing at null

let list = new LinkedList();

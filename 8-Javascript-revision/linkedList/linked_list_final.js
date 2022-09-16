class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert First head: {400, next: {200, next: {data: 100, next: null}}}
    // insert First current: {400, next: {200, next: {data: 100, next: null}}}

    insertFist(data) {
        let node = new Node(data, this.head)
        this.head = node;
        this.size++
    }

    // insert to the last of the node

    insertLast(data) {
        let node  = new Node(data) // {data: 400, next: null}
        let current;

        // if there is no head, make a head first
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = node;

        }
        this.size++;
    }

    // insert at given index

    insertAt(){
        
    }
}



const list = new LinkedList();

list.insertFist(100)
list.insertFist(50)
list.insertLast(300)


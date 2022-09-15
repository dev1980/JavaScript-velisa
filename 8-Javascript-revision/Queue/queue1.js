class Queue {
    constructor(){
        this.storage = {}
        this.head = 0;
        this.tail = 0;
    }
enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
}

dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;

}

peek(){
    return this.storage[this.tail-1]
}

}


let obj = new Queue();


obj.enqueue("apple");
obj.enqueue("orange");
obj.enqueue("mango");
obj.enqueue("fruits");

console.log(obj)
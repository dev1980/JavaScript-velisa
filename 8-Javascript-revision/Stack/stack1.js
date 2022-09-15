// STACK

class Stack {
    constructor(){
        this.storage = {}
        this.size = 0;
    }

    push(element) {
        this.size++;
        this.storage[this.size] = element
    }

    pop() {
       let removed = this.storage[this.size];
       delete this.storage[this.size]
       this.size--;
       return removed;
    }

    peek(){
        return this.storage[this.size];
    }
}

let obj = new Stack();

obj.push("apple")
obj.push("Mango")
obj.push("orange")
obj.push("go for walk")


console.log(obj)
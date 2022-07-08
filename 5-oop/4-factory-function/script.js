
let me = {
    name: "dev",
    talk: function() {
        console.log(`i am ${this.name}`)
    }
}


let you = {
    name: "John",
    talk: function() {
        console.log(`i am ${this.name}`)
    }
}

console.log(me)

console.log(you.talk())

function Person(name) {
//   this = {name: name}
this.name = name;
// return this;
}

Person.prototype.talk = function() {
    console.log(`i am ${this.name}`)
}

let me1 = new Person("dev1");
let you1 = new Person("John doe")

console.log(me1.talk())
console.log(you1.talk())


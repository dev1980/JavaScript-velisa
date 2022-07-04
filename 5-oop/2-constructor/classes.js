class User {
    constructor(name, score){
       this.name = name;
       this.score = score;
    }

    increment() {
        this.score++
    }

    login(){
        console.log("user loged in")
    }
}

let user1 = new User("bob", 5);

console.log(user1)

user1.increment()
console.log(user1)
user1.login();
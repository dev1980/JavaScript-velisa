function userCreator(name, score) {
    const newUser = Object.create(functionStore); //null will create empty object // functionStore
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const functionStore = {
    increment: function() {this.score++;},
    login: function() {console.log("user loged in")}
}


let user1 = userCreator("bob", 3);

console.log(user1)

// how to create constructor function

function User(name, score){

this.name = name;
this.score = score;

}

User.prototype.increment = function(){
   this.score++;
};

let user3 = new User("bob1", 5);

user3.increment();
user3.increment();

console.log(user3)

let user4 = new User("robert", 7);
console.log(user4)

user4.increment();

console.log(user4)

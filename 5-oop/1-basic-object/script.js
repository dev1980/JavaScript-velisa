// let user1 = {
//     name: "john",
//     score: 5,
//     increse: function () {
//         user1.score++
//     }
// }

// let user2 = {
//     name: "Dev",
//     score: 6,
//     increse: function () {
//         user2.score++
//     }
// }

// user1.increse();
// user1.increse();
// console.log(user1)

let newObj = {};
console.log(newObj)
let secondObj = Object.create(null);
console.log(secondObj)

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

let user2 = userCreator("dev", 4);
user2.increment();
console.log(user2)
user1.increment();
user1.increment();
console.log(user1)


console.log(user1)

function multiplyByTwo(n){
return n * 2;
}

console.log(multiplyByTwo(5))
multiplyByTwo.range = 5;





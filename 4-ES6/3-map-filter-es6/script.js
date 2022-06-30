//function statement
function sum() {
    console.log("hello world")
}

sum();

// function expression

let sumAgain = function() {
    console.log("hello world") 
}

sumAgain();

//es6 Arrow function

let sum1 = ()=>{
    console.log("arrow function")
}

sum1();


// let add = (x, y) => {
// 	return x + y;
// };


console.log(add(10, 20)); // 30

let add = (x, y) =>  x + y;
let result = add(20, 30) // 50
console.log(result)
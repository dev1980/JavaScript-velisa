//how javascript engine work. how code is executed in javascript engine.
// call stack is the place where code is excuted step by step;

console.log("start");

let x = 20;

function b() {
    let y = 10;
    let sum = x + y;
    function c(){
        console.log("c")
    }
    c();
    return sum;
}


let result =b();

function add(){
    return 10;
}

console.log(result)
console.log(b());



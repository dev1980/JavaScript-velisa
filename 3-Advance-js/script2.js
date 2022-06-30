//What is execution context ?
/*
let x = 10;
function sum(){
    return x+20;
}

let result = sum();
console.log(result)

*/

let n = 2;
function square(num) {
    let ans = num * num;
    return ans;
}

let square2 = square(n); // 4
let square4 = square(4); // 16
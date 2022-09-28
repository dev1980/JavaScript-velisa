//using for loop
//5 - 1*2*3*4*5 = 120

// function fact(num) {
//     let result = 1;
//     for(let i = 1; i <= num; i++){
//        result *= i 
//     }
//     return result
// }

// console.log(fact(5))

// console.log(fact(20))

function fact(num) {
    if(num === 0) {
        return 1
    }
    else {
        return num * fact(num -1)
    }
}

console.log(fact(10))


// you have a number form 1 to 100 
// if the number is divide by 3 then print fizz / if divde by 5 print buzz / divide by boath then 
//print fizzbuzz

// 1 % 3 === 0 (fizz) // 1 % 5 === 0 ("buzz") // 1 % 3 && 1 % 5 === 0 ("fizzbuzz")

function fizzbuzz(num) {
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if(i % 3 === 0) {
            console.log("Fizz")
        } else if(i % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(100)

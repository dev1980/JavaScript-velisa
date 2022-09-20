// console.log(x) // undefined

// console.log(sum()) // f sum() {}

// var x = 5;
// console.log(x)
// function sum(){
    
//     var x = 10;
   
//     console.log(x)
//     return x+5
// }

// sum();

// let x;
// const y = 30;
// x = 50;



// {
//     let x = 100;
//     let y = 300;
// }





function scope(){
    let i = "function scope"

    if(true) {
        let i =  "block scope"
        console.log(i)
    }

    console.log(i)
    return i
}

scope();
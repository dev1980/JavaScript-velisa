// Hoisting is phomenon by which you can access the varaibles and function even before 
//initialized the value.

console.log(x)
console.log(b())

var x = 20;
{
    let d = 200;
    const e = "100"
    console.log(e, e)
}
let a  = 20;
const c = 30;

function b(){
    let y = 10;
    console.log(y)
    console.log("b string")  
}

console.log(g)
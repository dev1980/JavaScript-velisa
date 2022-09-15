let stack  = [];

let add = (val) => stack.push(val);


add("mango");
add("orange");
add("apple");
console.log(stack);


let remove = stack.pop();
console.log(remove)
console.log(stack)
console.log(stack[stack.length -1]); 
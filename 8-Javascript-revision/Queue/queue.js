let queue = [];

let add = (element) => queue.push(element);


add("apple")
add("orange")
add("magno")
add("fruits")

console.log(queue)

let removed = queue.shift();
console.log(removed)

queue.shift();

queue.shift();
console.log(queue)


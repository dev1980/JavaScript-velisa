
function getRandom(max) {
    let rand = Math.floor(Math.random() * max) + 1;
    return rand;
}

console.log(getRandom(6))
console.log(getRandom(10))
console.log(getRandom(5))
console.log(getRandom(3))
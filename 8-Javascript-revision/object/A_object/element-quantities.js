// Create a function `elementQuantities` that accepts an object as an argument. The object contains
// elements as keys and quantities as values. The function should return an array containing the elements
// appearing with the correct quantities. See the examples.

function elementQuantities(obj) {
    let arr = [];
    let resultArr = [];

    for(let key in obj){
        arr.push([key, obj[key]])
    }
arr.forEach(item=>{
    let element = item[0]
    let val = item[1]
    for(let i = 0; i< val; i++){
       resultArr.push(element) 
    }
})
   return resultArr;
}

let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1)); // ['cat', 'cat', 'cat', 'bird, 'dog', 'dog']

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']
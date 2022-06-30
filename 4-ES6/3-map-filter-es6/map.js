let circle = [10,20,30,40];

let newArr = [];

// for(let i = 0; i <circle.length; i++) {
//     let element = circle[i];
//     newArr.push(element + 5)
// }

// console.log(newArr)


// map

// let result = circle.map(function(element) {
// return element+5
// })

// console.log(result)

//find the area of the circle, please use map function.

let circles = [10, 30, 50];

function areaOfCircle(r){
    return Math.floor(Math.PI*r*r);
}

let area = circles.map(areaOfCircle);

let areaAgain = circles.map(function(r){
    return Math.floor(Math.PI*r*r);
})

console.log(areaAgain)
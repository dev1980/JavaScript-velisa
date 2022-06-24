const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


let btn = document.getElementById("btn");

btn.addEventListener("click", changeColor);


function changeColor() {
    let index = getRanodom();
    console.log(index)
    let body = document.body;
    let color = document.querySelector(".color");
    color.innerText = colors[index];
    body.style.backgroundColor =`${colors[index]}`
}

function getRanodom() {
    let num = Math.floor(Math.random()*colors.length)
    return num;
}
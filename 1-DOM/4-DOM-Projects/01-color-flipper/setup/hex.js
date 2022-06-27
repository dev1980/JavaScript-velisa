const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



let btn = document.getElementById("btn");

btn.addEventListener("click", changeColor);


function changeColor() {
    
    let hexcode ="";
    for(let i = 0; i <6; i++) {
        let index = getRanodom();
        hexcode += hex[index]
    }
    console.log(hexcode)

    let body = document.body;
    let color = document.querySelector(".color");
    color.innerText = hexcode;
    body.style.backgroundColor =`#${hexcode}`;
}

function getRanodom() {
    let num = Math.floor(Math.random()*hex.length)
    return num;
}
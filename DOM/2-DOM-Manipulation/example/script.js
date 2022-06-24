let header = document.querySelector(".header");
let main = document.getElementById("main");

//let body = document.body;

let h1 = document.createElement("h1");
console.log(h1)

h1.innerText = "About My Blog";

header.append(h1)

let section = document.createElement("section");

let secondh1 = document.createElement("h1");
secondh1.textContent = "header for section"
section.append(secondh1)
let p1 = document.createElement("p");
p1.innerText = "some text for a paragraph";
section.append(p1)

main.append(section)
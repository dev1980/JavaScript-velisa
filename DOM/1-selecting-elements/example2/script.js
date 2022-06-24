
// selecting element.
// getElementById()

const h2 = document.getElementById("header-title"); 
console.log(h2)

const header = document.getElementById("header");
console.log(header)

let noid = document.getElementById("demo")
console.log(noid) // return null if no id found.

//getElementsByTagName()

let elements = document.getElementsByTagName("li");
console.log(elements)

// Summary
// The getElementsByTagName() is a method of the document or element object.
// The getElementsByTagName() accepts a tag name and returns a list of elements with the matching tag name.
// The getElementsByTagName() returns a live HTMLCollection of elements. The HTMLCollection is an array-like object.

// getElementsByClassName()

const li = document.getElementsByClassName("list-item");
console.log(li);

const h3 = document.getElementsByClassName("heading3");
console.log(h3)

//querySelector();

//The querySelector() is a method of the Element
// interface. The querySelector() method allows you to select the first element that matches one or more CSS selectors.

let header1 = document.querySelector("#header");

console.log(header1)

const listItem = document.querySelector(".list-item")
console.log(listItem)

//querySelectorAll() methods




let header2 = document.querySelectorAll("#header");

console.log(header2)

let listItemArr = document.querySelectorAll(".list-item")
console.log(listItemArr)

listItemArr.forEach((item) => {
    item.style = "margin:10px; border: 1px solid red"

})

let arr = Array.from(listItemArr);
console.log(arr[arr.length - 1].textContent)
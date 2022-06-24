
// Adding element to the page. There is mainly two different way we can add element to the page.
//append and appendChild

//difference between append and appendChild is in append u can add text and multiple things at same time.
//with appendChild only u are allow to add node <p>hello </p>

// let body = document.body;

// let element = document.createElement("h1");
// element.textContent = "Heading 1"
// console.log(element)

// body.append(element)

// body.appendChild(element)

// body.append("hello world")

// body.appendChild("dfasdfdas")

// let body = document.body;

// const div = document.createElement("div");

// Adding text to the div or any element. there are two differet way we can do it.
// console.log(div)

// div.innerText = "hello text";

// div.textContent = "hello text again"

// body.appendChild(div)

// adding text with innerText and textContent is the same but only difference is when u view the text.


// const divE = document.querySelector(".div");
// console.log(divE.textContent) // add space and dd indentation
// console.log(divE.innerText) // inner text print same like html would print in page



//Render html element inside inside body, div or any other element.

// let body = document.body;
// const div  = document.createElement("div");
// div.innerText = "<h1>heading 111</h1>";
// div.textContent = "<p>this is a paragraph</p>"

// body.append(div)

// let h1 = document.createElement("h1");
// let h2 = document.createElement("h1");
// h1.innerText = "Heading 1"
// h2.innerText = "Heading 2"
// div.appendChild(h1)
// div.appendChild(h2)


let body = document.body;
const div  = document.createElement("div");
// div.innerHTML = "<strong>hello wolrd with strong word</strong>"
// body.append(div)

div.innerHTML = `
<ul>
<li>Home Page</li>
<li>Home Page2</li>
<li>Home Page3</li>
<li>Home Page4</li>
</ul>
`
body.append(div)

// this is good thing that we can insert html straight from our Javascript to html page.
//but above method has security risk, so we instead we  can create the html tag then insert that.



// let ul = document.createElement("ul");

// let li = document.createElement("li");
// li.innerText = "Home Page 1"
// let li2 = document.createElement("li");
// li2.innerText = "Home Page 2"
// div.append(li);
// div.append(li2)
// body.append(div)


//Removing element from DOM

// let body = document.body;
// const div = document.querySelector("div");

// const hi = document.querySelector("#hi");
// const bye = document.querySelector("#bye");

//Remove element from page.
//Remove node 
// bye.remove();
// div.append(bye)
// body.append(div)


//remove as child

// div.removeChild(bye);

// setting and getting attributes and removing attribute




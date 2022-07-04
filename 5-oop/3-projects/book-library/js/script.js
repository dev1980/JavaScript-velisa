let myLibrary = [];

function Book(id, name, author, type) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.type = type
}

function Display() {
  // do stuff here
}

Display.prototype.validate = function(book) {
    if(book.name.length < 2 || book.authorlength < 2){
        return false;
    }else {
        return true;
    }
}

Display.prototype.show = function(message, info) {
    let displayMessage = document.getElementById("message");
    displayMessage.innerHTML = `
    <p class=${message}>${info}</p>
    `
    setTimeout(function(){
        displayMessage.innerHTML = "";
    }, 2000)
}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.add = function(book) {
    document.getElementById("library").innerHTML = "";
    myLibrary.map((book)=>{
        let div = document.createElement("div");
        div.setAttribute("class", "displayBook");

        let ui = `
                <p>${book.name}</p>
                <p>${book.author}</p>
                <p>${book.type}</p>
                <button id=${book.id} class="delete" onclick="RemoveBook()">Delete</button>      
        `
        div.innerHTML = ui;

        let library = document.getElementById("library");
        library.append(div);
    })

}

// Display.prototype.delete = function() {
// console.log("deleted")
// }

function RemoveBook(){
    console.log("Deleted");
}

let addBook = document.getElementById("addBook");
addBook.addEventListener("click", libraryFormSubmit);
function libraryFormSubmit(e){
    e.preventDefault();
    let id = new Date().getTime();
    let name = document.querySelector(".bookName").value;
    let author = document.querySelector(".bookAuthor").value;
    let type;

    let fiction = document.getElementById("fiction");
    let computer = document.getElementById("computer");
    let cooking = document.getElementById("cooking")
    if(fiction.checked) {
        type = fiction.value;
    } else if(computer.checked) {
        type = computer.value;
    } else if(cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(id,name, author, type);
    console.log(book)
    
    console.log(myLibrary)

    let display  = new Display();

    if(display.validate(book)) {
        myLibrary.push(book)
        display.show("sucess", "Book added to the library")
    } else {
        display.show("alert", "Please fill the form correctly")
    } 

    display.clear();

    display.add();
}
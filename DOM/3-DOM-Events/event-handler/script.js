
let mybtn = document.getElementById("mybtn");

mybtn.addEventListener("click", displayDate);

function displayDate() {
    let p = document.getElementById("demo");
    let date = new Date();
    p.innerText = date;
}
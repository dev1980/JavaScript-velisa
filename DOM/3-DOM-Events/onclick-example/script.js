

function getDate() {
    // let p = document.querySelector("#demo");
    let p = document.getElementById("demo")
    
    let date = new Date();
    console.log(date)
    // p.textContent = date;
    p.innerText = date;
}

function attchedEventListner() {
    let count = 0;

    document.getElementById("btn").addEventListener("click", function(){
        console.log(`button is clicked`, count++)
    })
}

attchedEventListner();
// second example
function x(callback) {
    callback();
    console.log("X");

}

function y(){
    setTimeout(function(){
        console.log("Y")
    }, 5000)
    
}

x(y);
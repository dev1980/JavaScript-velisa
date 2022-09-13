// print the number from 1 to 5 in interval of 5 second.

function x(){
    console.log("Start")
    for(var i = 1; i < 6; i++) {
        function closure(i){
        setTimeout(function(){
            console.log(i);
        }, 5000)
    }
    closure(i);
    }

    console.log("End")
}

x();


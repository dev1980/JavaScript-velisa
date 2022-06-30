// let count = 0;



function addEventLoop(){
    let count = 0;
    document.getElementById("btn").addEventListener("click" , () =>{
        
        console.log("count the click", count++)
    })
    
}
    

addEventLoop();
   



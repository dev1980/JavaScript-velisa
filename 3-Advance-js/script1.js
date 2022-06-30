//js is synchronous programming language.
console.log("line 1");
console.log("*")
console.log("**")

//asynchronous 
setTimeout(function(){
console.log("data from callback");
}, 5000)
console.log("***")
console.log("****")
console.log("******")




    let data = new Promise((resolve, reject)=>{
        let value = false;
        if(value){
            resolve("The data is received").then((result)=>{
                return result;
            })
        }else {
            reject("Sorry Data is not received").catch((error)=>{
               return error
            })
        }
    })


console.log(data)
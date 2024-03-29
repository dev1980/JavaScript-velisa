// Write a function `letterMap` that accepts a string and an object as arguments. The function should
// return a version of the string where characters that appear as keys in object are replaced with
// their corresponding values.

// create variable for new string as result
// get all the key from object
// loop through the string
// we need to check that character in our key;
//once it matches then replace the value of the char with key value.

function letterMap(str, obj) {
    let newStr = "";
    let  keyArray = Object.keys(obj);
    for(let i = 0; i <str.length; i++){
        let char = str[i];
        if(keyArray.includes(char)){
           newStr +=  obj[char]
        } else {
            newStr += char
        }
    }
    return newStr;
}


console.log(letterMap("symbolic", { y: "i", o: "a", c: "k" })); // 'simbalik'
console.log(letterMap("colossal", { o: "x", s: "p" })); // 'cxlxppal'
console.log(letterMap("miniscule", { u: "t", i: "f", e: "q" })); // 'mfnfsctlq'
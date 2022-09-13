// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

function removeCapitals(str) {
let output = "";
for(let i = 0; i < str.length; i++) {
    let char = str[i]

    if(char === char.toLowerCase()) {
        output += char;
    }
}
return output;
}

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'
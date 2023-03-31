// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function doubleVowel(str) {
    let newStr = "";
    let vowel = "aeiou";
    for(let i = 0; i < str.length; i++) {
        let char =  str[i];
        if(vowel.includes(char)){
            newStr += char + char;
        }else {
            newStr += char;
        }
    }

    return newStr;
}

console.log(doubleVowel("runner")); // 'ruunneer'
console.log(doubleVowel("stoplight")); // 'stoopliight'
console.log(doubleVowel("gardener")); // 'gaardeeneer'
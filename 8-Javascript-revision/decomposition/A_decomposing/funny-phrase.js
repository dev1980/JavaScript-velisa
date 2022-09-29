// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function funnyPhrase(str) {
  let result = [];
  let  arr = str.split(" ") 
 for(let i = 0; i< arr.length; i++){
    let word = arr[i]
    if(i % 2 === 0) {
        result.push(word)
    }else {
        let change = doubleChar(word)
        result.push(change)
    }
 }
 return result.join(" ");
}

function doubleChar(str) {
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

console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'
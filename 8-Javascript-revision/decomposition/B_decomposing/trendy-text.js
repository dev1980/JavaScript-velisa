// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.

function trendyText(str) {
    let arr = str.split(" ")
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let word = arr[i] 

        let changeWord = removeLastVowel(word)
        newArr.push(changeWord)
    }

    return newArr.join(" ");
}


function removeLastVowel(str) {
let vowels = "aeiou";
for(let i = str.length - 1; i >=0; i--) {
    let char = str[i]
    if(vowels.includes(char)) {
        let newStr = str.slice(0, i) + str.slice(i+1)
        return newStr;
    }
}

return str;
}

console.log(trendyText("the concert will be epic")); // 'th concrt wll be epc'
console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'
// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

function mostLetterWord(sentence, char){
let arr = sentence.split(" ");
let result = [];

for(let i = 0; i<arr.length; i++){
    let word = arr[i]
    let count = countChar(word, char)
    result.push([word, count])
}


let longest = longestWord(result)
return longest;
}


function countChar(word, char){
    let count = 0;
    for(let i =0; i <word.length; i++){
        if(word[i] === char) {
            count += 1
        }
    }
    return count
}

function longestWord(result) {
    let word = "";
    let count = 0
    for(let i = 0; i < result.length; i++){
       if(count < result[i][1]) {
        word = result[i][0]
        count = result[i][1]
       }
    }

    return word;
}
console.log(mostLetterWord('she received an award for excellence in science', 'e')); // 'excellence'
console.log(mostLetterWord('she received an award for excellence in science', 'a')); // 'award'
console.log(mostLetterWord('I hope sophomore year comes soon', 'o')); // 'sophomore'
console.log(mostLetterWord('I hope sophomore year comes soon', 's')); // 'sophomore'

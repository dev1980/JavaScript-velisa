// Write a function `censorSentence(sentence, targetWords)` that accepts a sentence string and an array
// of target words as arguments. The function should return a new sentence where any target words 
// have all of their characters replaced with '*'s.

function censorSentence(sentence, targetWords){
    let arr = sentence.split(" ");
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if(targetWords.includes(word)){
           let change = changeWord(word)
           newArr.push(change)
        }else {
            newArr.push(word)
        }
    }

    return newArr.join(" ")
}

function changeWord(word){
    let result = ""
    for(let i =0; i < word.length; i++){
        result += "*"
    }
    return result;
}

console.log(censorSentence('where the heck is my celery', ['heck', 'celery'])); 
// 'where the **** is my ******'

console.log(censorSentence('why you little sweetheart', ['sweetheart', 'salad'])); 
// 'why you little **********'
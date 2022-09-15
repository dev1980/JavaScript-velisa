// Write a function `mostCommonLetter` that accepts a string as an argument. The function should return
// the character that appears most frequently in the string. You can assume that there are no ties.
function mostCommonLetter(str) {
    let obj = {};
    let arr= []
    for(let i =0; i < str.length; i++) {
        let char = str[i];
        if(obj.hasOwnProperty(char)){
            obj[char] += 1
        } else {
            obj[char] = 1
        }
    }
    
    for(let k in obj) {
        arr.push([k, obj[k]])
    }

   let sorted = arr.sort(function(a, b){
    return a[1] - b[1]
   })

   return sorted[sorted.length - 1][0]; 
}


console.log(mostCommonLetter("building")); // 'i'
console.log(mostCommonLetter("shoestring")); // 's'
console.log(mostCommonLetter("preparedness")); // 'e'
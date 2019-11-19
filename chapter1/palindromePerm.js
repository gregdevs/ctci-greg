// Given a string, write a function to check if it is a permuation of a palindrome. a palindrome is a word/phrase that is the same forwards/backwrards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words



function palindromePerm(str) {
    let strArr = str.replace(/ /g, "").toLowerCase().split(""),
        hashStr = {},
        hashStrLen,
        leftOver = [];
    //  assign k/v to hash
    for (let i = 0; i < strArr.length; i++){
        hashStr[strArr[i]] = (!hashStr.hasOwnProperty(strArr[i])) ? 1 :hashStr[strArr[i]] + 1 ;
    }
    
    hashStrLen = Object.keys(hashStr).length;
    //push keys with value of 1 to array
    for(let k = 0; k < hashStrLen; k++){
        if (hashStr[k] === 1){
            leftOver.push(hashStr[k]);
        }
    }
    // if there are more than 1 base character in array  with just 1 value, we know that it is not a palindrome
    return leftOver.length === 0;
}



//original attempt


// let cleanedStr = str.replace(/ /g, "" ).toLowerCase(),
// isEven = cleanedStr.length % 2 === 0,
// firstHalf = cleanedStr.substring(0, Math.round(cleanedStr.length/2)).split("").sort().join(""),
// secondHalf;

// if (isEven) {
// secondHalf = cleanedStr.substring(cleanedStr.length/2).split("").sort().join("");
// if (firstHalf === secondHalf){
//     return true;
// }
// } 
// else {
// secondHalf = cleanedStr.substring(cleanedStr.length,  Math.round(cleanedStr.length/2)).split("").sort().join("");
// if (firstHalf.length === secondHalf.length + 1){
//     for (let i = 0; i < firstHalf.length; i++){
//         for (let g = i + 1; g < secondHalf.length; g++){
//             if (firstHalf[i] !== secondHalf[g]){
//                 return true
//             }
//         }            
//     }
// }
// }
// return false;

console.log( palindromePerm("12344321") ); //true
console.log( palindromePerm("13324214") ); //true
console.log( palindromePerm("abcddcba")); //true
console.log(palindromePerm("123443")); //false
console.log(palindromePerm("Tact Coa")); //true
console.log(palindromePerm("anna")); //true
console.log(palindromePerm("Eva can I see bees in a cave")) // true
console.log( palindromePerm("")); //true

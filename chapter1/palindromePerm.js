// Given a string, write a function to check if it is a permuation of a palindrome. a palindrome is a word/phrase that is the same forwards/backwrards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words


/* 
  todo This is a naive approach
 */

palindromePerm = (str) => {
    var cleanedStr = str.replace(/ /g, "" ).toLowerCase(),
        isEven = cleanedStr.length % 2 === 0,
        firstHalf = cleanedStr.substring(0, Math.round(cleanedStr.length/2)).split("").sort().join(""),
        secondHalf;
    if (isEven) {
        secondHalf = cleanedStr.substring(cleanedStr.length/2).split("").sort().join("");
        if (firstHalf === secondHalf){
            return true;
        }
    } 
    else {
        secondHalf = cleanedStr.substring(cleanedStr.length,  Math.round(cleanedStr.length/2)).split("").sort().join("");
        if (firstHalf.length === secondHalf.length + 1){
            for (var i = 0; i < firstHalf.length; i++){
                for (var g = i + 1; g < secondHalf.length; g++){
                    if (firstHalf[i] !== secondHalf[g]){
                        return true
                    }
                }            
            }
        }
    }
    return false;
}

// palindromePerm("taco cat") => true
// palindromePerm("Tact Coa") => true
// palindromePerm("12344321") => true
// palindromePerm("1234432") => true   2341 432
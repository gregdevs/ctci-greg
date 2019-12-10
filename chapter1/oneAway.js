
//  There are three types of edits that can be performed on
//  strings: insert a character, remove a character, or replace a character.
//  Given two strings, write a function to check if they are one edit (or zero
//  edits) away.

function oneAway(str1, str2){
    let arr = [];
    function loopStrings(firstStr, compareStr){
        for (let i = 0; i< firstStr.length; i++){
            if (!compareStr.includes(firstStr[i])){
                arr.push(i);
            }
        }
        if (arr.length === 1){
            return true;
        }   
        return false;   
    }
    //replace character or  addedcharacter  firsSte
    if (str1.length >= str2.length ){
       return loopStrings(str1, str2);
    }
    else if (str2.length > str1.length) {
       return loopStrings(str2, str1);
    }
}
console.log(oneAway("pale", "bake")); // false
console.log(oneAway("pale", "ple")); // true
console.log(oneAway("pale", "pales")); //true

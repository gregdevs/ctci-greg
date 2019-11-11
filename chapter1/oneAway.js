
//  There are three types of edits that can be performed on
//  strings: insert a character, remove a character, or replace a character.
//  Given two strings, write a function to check if they are one edit (or zero
//  edits) away.

oneAway = (str1, str2) => {
    var arr = []
    function loopStrings(firstStr, compareStr){
        for (var i = 0; i< firstStr.length; i++){
            if (!compareStr.includes(firstStr[i])){
                arr.push(i)
            }
        }
        if (arr.length === 1){
            return true;
        }   
        return false;   
    }
    //replace character or  addedcharacter  firsSte
    if (str1.length === str2.length || str1.length > str2.length){
       return loopStrings(str1, str2)
    }
    else if (str2.length > str1.length) {
       return loopStrings(str2, str1)
    }
}


// oneAway("pale", "bake") => false
// oneAway("pale", "ple") => true
// oneAway("pale", "pales") => true
// oneAway("pales", "pale") => true
// oneAway("pale", "bale") => true
// oneAway("ple", "pale") => true
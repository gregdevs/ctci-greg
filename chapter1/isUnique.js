//implement  an algo to determine id a string has all unique characters. What if you cannot use additional data structure?
//  first attempt

function isUnique(str){
    var i = 0; // acting on the belief that an integer is a data type and NOT really data structure
    while(i < str.length){
        for(var g = i; g < str.length; g++){
            if (str[i] === str[g+1]){
                return false;
            }
        }
     i++;   
    }
    return true
}
console.log(isUnique("knicks"))
console.log(isUnique("yankees"))
console.log(isUnique("pagerduty"))
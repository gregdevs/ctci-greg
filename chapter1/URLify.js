// Write a method to replace all spaces in a string with `%20`. You may assume  that the string has sufficient space at the  end to hold the additional characters, and that you are given the "true" length of the string. 

function URLify(str, n){
    return str.trim().replace(/ /g, "%20");   
}
console.log(URLify("Mr John Smith    ", 13))
console.log(URLify("Hello Everyone  ", 14))

//URLify("Mr John Smith    ", 13);  => "Mr%20John%20Smith"
//URLify("Hello Everyone  ", 14); => "Hello%20Everyone"

// Write a method to replace all spaces in a string with `%20`. You may assume  that the string has sufficient space at the  end to hold the additional characters, and that you are given the "true" length of the string. 

URLify = (str, n) => {
    var cleanedStr = str.trim();
    if (cleanedStr.length === n){
        return cleanedStr.replace(/ /g, "%20");
    }
}

//URLify("Mr John Smith    ", 13);  => "Mr%20John%20Smith"
//URLify("Hello Everyone  ", 14); => "Hello%20Everyone"

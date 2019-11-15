// Given two string, write a method to decide if one is a permutation of the other;
checkPermutation = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(checkPermutation("fitt", "shitt"))
console.log(checkPermutation("pantera", "tapnera"))
console.log(checkPermutation("telly", "ellyt"))

//checkPermutation("fitt", "shitt") => false
//checkPermutation("pantera", "tapnera") => true
//checkPermutation("telly", "ellyt") => true

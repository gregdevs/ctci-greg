
// IMplement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. if the compressed string would not become smaller that the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters.

function stringCompression( str ){
    let arr = [], 
        compressedString = [];
    const  s = str.toLowerCase().split("");

    for(let i = 0;  i < s.length; i++){
            arr.push({char: s[i], value: 1});
    }
    for(let g = 0;  g < arr.length; g++){
        if (typeof arr[g+1] !== 'undefined' && arr[g].char === arr[g+1].char){
            arr[g].value++;
            arr.splice(g+1, 1);
            g--;
        } 
        
    }
    for (let t = 0; t < arr.length; t++) {
        compressedString.push({[arr[t].char]:arr[t].value});
    }

     compressedString = JSON.stringify(compressedString).replace(/[",:[{}\]]/g, "");

     if (compressedString.length > str.length){
        return str;
     }
     return compressedString;

}


console.log(stringCompression('aabcccccaaa')) // a2b1c5a3
console.log(stringCompression('abcdefghhijklmnop')) //abcdefghhijklmnop since a1b1c1d1e1f1g1h2i1j1k1l1m1n1o1p1 is longer
console.log(stringCompression('bddggggffffhhhggg')) // b1d2g4f4h3g3
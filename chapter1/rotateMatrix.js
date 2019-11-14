// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.

/*
Input:
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
Output: 
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
];

*/
rotateMatrix = (arr) => {
    var rotateArr = [];
    var arrLen = arr.length;
    var  i = 0;

    function loopThrough(i){
        if (rotateArr.length === arrLen ){
            return rotateArr;
        }  

        while(i < arr.length){
            var temp = [];
            var l = 0;
            while(l < arrLen ){
                temp.push(arr[l][i]);
                l++;
            }
            rotateArr.push(temp.reverse());
            i++;
            return loopThrough(i)          
        }

    }
    return loopThrough(i);
}

console.log(rotateMatrix([[1,2,3], [4,5,6], [7,8,9]])) // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
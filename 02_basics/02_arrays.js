/*----------------------NOTE: Object.method() → Static method (static method belong to the object itself),
----------------------------- Variable.method() → Instance method (instance method belong to the created variable)------------------fun which are mentioned in this file are called as method */
//-->In this file we will learn more array methods.

let disneyCartoon = ["doraemon","litlle krishna","chotabheem"]
let hungamaCartoon = ["shichan","ninjahatoori","motupathlu"]

// console.log(disneyCartoon.concat(hungamaCartoon)) //---> concat() fun is used to add both elements of array in single array.

// console.log([...disneyCartoon,...hungamaCartoon]) //--> spread() fun is used to add both elements of array in single array.

let myArr = [1,2,3,[4,5],6,7,[8,9],0,10,[11,22],88,34]
//console.log(myArr.flat(Infinity)) //--> flat() used to represent all array elements in single array.NOTE: WE HAVE NOT ADDED "DEPTH" WHICH IS THE PART OF FLAT()FUN.WE WILL STUDY LATER ABOUT IT..


let arrayNew = ["saikiran"]
// console.log(arrayNew.isArray("upparipalli")) //-->  GIVES ERROR
// console.log(Array.isArray(arrayNew)) //-->  isArray() method will works with static method.

// console.log(Array.from(arrayNew)) //--> from() method converts string into an arrray.

let score1 = 900
let score2 = 1000
let score3 = 1200

console.log(Array.of(score1,score2,score3))  //--> Array.of() method converts the elements into an array.

//const scores = [score1,score2,score3]
//console.log(scores.join())   



// ----------Maps() method-------------

// map() is used to change every item in an array and return a new array.
// Generally, filter() → selects values where map() → changes values.

const nums = [9,3,5,6,1,6]

const modifyNum = nums.map((num)=> num + 1)
console.log(modifyNum)

// -------------------chaining method------------
// NOTE:chaining is a technique.
// Chaining in JavaScript means using multiple methods together, one after another, 
// where the output of one method becomes the input for the next.

const myNumbers = [9,4,2,5,7]

const chainingNumbers = myNumbers.map((num)=> num - 1)
.map((num)=> num * 3 )
.map((num)=> num + 5)
.filter((num)=> num > 5)
console.log(chainingNumbers)

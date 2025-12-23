// -------------------while Loop--------------------
// example 1:
let value = 15
let i= 1;

while (i<=value) {
    // console.log(`value of i is: ${i}`)
    i = i+1
}

// example 2:
let myArray = [0,8,3,1,2]
let index = 0

while (index < myArray.length) {
    // console.log(`myArray values are ${myArray[index]}`)
    index = index + 1
}

// -------------do while Loop------------------------
// example 1:
let marksGained = 80
do {
    // console.log(`you have secured a third rank ${marksGained}`)
    marksGained++
} while (marksGained<=90);


// example 2:
let arr = [90,76,343]
let j = 0
do {
    console.log(`j is: ${arr[j]}`)
    j++
} while (j<arr.length);
// reduce: **`reduce()`** is used to **combine all values in an array into one single result**
//  (like adding all numbers together).

const myNumbers = [9,8,4,2,5]
// For understanding the working of reduce() method run the program:
const combineNumbers = myNumbers.reduce((accumulator,num)=>{
    // console.log(`accumulator value ${accumulator} and current value ${num}`)
    return accumulator + num
/* In reduce method we have accumulator value and current value, 
1. accumulator starts with the initial value (0).
2. current value comes from the array elements one by one.
3. The returned value is stored back in the accumulator.
4. reduce() finally returns a single combined value.
*/
},0)

// console.log(combineNumbers)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const addTotal = shoppingCart.reduce((acc,currval)=> ( acc + currval.price ),0)
console.log(addTotal)


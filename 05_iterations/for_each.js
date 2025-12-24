// foreach loop:**`forEach`** is an array loop that **runs a function once for each element** in the array.

// Method 1:
let myArray = [4,9,0,33,54,89,120,808]

 myArray.forEach((value,index) => { // forEach is an built in array method that runs a function once
 //  for each element in the array
    //   console.log((value,index));
// we can also print index , arr of an array
});

//  Method 2:
let myArray2 = [77,77,77,77]

function name(value2){
    // console.log(value2)

}
myArray2.forEach(name)

/* Steps for forEach loop:
1. We use the built-in forEach() array method.
2. forEach() runs a function once for each element in the array.
3. The function receives the current array element as a parameter.
4. The function can be:
   - an anonymous/arrow function, or
   - a named function.
*/

// ---IMPORTANT ------------------------
const searchObject = [
    {
        userName:"saikiran",
        password:1234,
    },
    {
        userName:"upparipalli",
        password:8899,
    },
    {
        userName:"karthik",
        password:8873,
    },
    {
        userName:"jayanth",
        password:6732,
    },
]

searchObject.forEach((thing)=>{
    console.log(thing.userName )
})


//-------------finding the object values using filter method------------------------------
const findObject = searchObject.filter((name)=>{
    return name.userName ==="karthik" && name.password === 8873
})
console.log(findObject)
// --------------------------------------
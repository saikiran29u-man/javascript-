// "=" operator is used to assign value to the variable.(assignment operator)
// "==" operator is used to check the values.(e.g:2==2) (Equality operator)
// "===" operator is used to check the values along with their datatypes.(e.g:2==="2")(Strict equality operator)
// "!=" operator is used to compare the values.(e.g:2!==2->false) (Inequality operator)
//"!==" operator is used to compare the values along with their datatypes.(e.g:2!=="2"->true)(Strict inequality operator)
// "&&,||" are logical operators.

const result = 93

if(result >= 90){
  //  console.log("you have passed in first class.")
    const value = 1000
//-> NOTE: DONT USE VAR INSIDE OF CONTROL FLOW , IT WILL BECOME GLOBAL SCOPE.
  //  console.log(`result is added to your annual marks ${value}`)
} else{
    console.log("Better luck for the next time")
} 
// console.log(`result is added to your annual marks ${value}`) //--> this line throws an error.

if(true) console.log("hello world"); //--> it is an implicit scope.


const userloggedIn = true
const email = true //--> && , || operators for checking one or more conditions at a time.
const password = false
const guestUser = true

if(email && password){
    console.log("you have successfully logged in")
} else if(guestUser){
    console.log("you have succesfully logged in")
} else if(email || password){
    console.log("enter the correct password")
} else{
    console.log("login first")
}


//---------IMP: Nullish coalescing operator (Null coalescing operator)-------------------------------
//--> The nullish coalescing operator (??) is used to provide a default value 
// when a variable is null or undefined.

let username = null
let displayname = username ?? undefined ?? "upparipalli"
console.log(displayname)

//--------IMP:ternary operator-------------------
// Syntax: condition ? true : false

let age = 22
age > 20 ? console.log("Adult") : console.log("teenager")
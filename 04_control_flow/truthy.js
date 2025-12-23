//NOTE: go to browser console and check:
        /* false == 0 -->true
        false ==''-->true
        0 ==='' -->true  */

// truthy values: values that act like true in conditions ( {},[],'0','false',"",function(){},true )
// falsy values: values that act like false ( 0,-0,Bigint 0n, Nan, undefined, null, false)

/* conditons will assume the values based on the given values, e.g:
if we have given an empty array to the variable than condition inside control flow statement will
assume it as true. */
let array = []
//----program to check array is empty is not--------
if(array.length === 0){
    console.log("it is an empty array")
}

const myObj = {}
//----program to check object is empty is not--------
if(Object.keys(myObj).length === 0){
    console.log("myObj is empty");
    
}
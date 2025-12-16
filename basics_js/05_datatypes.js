/* As we already know about primitive datatypes in js:
    number,string,boolean,undefined,null,symbol,bigint.
*/
    let number=Symbol(123);
    let number2=Symbol(123);
    console.log(number===number2); // example for symbol datatype.In symbol datatype 'S' should be capital.

// Arrays,objects,functions are non-primitive datatypes in js.

let arr=["hey","how are","you?"]; 
console.log(arr);
// example for array datatype.

let objBox= {                           // syntax for obj datatype: obj={
    name:"saikiran",                                              //  name:"value",
    age:22 ,                                                      //  key:value,
}                                                                //   }                                                             
console.log(objBox);                   //in object, we can store multiple key-value pairs.


/*we will look about function datatype in coming files.
let myFun=function(a=10,b=20){
    return a+b;
    // console.log(myFun);
} */
//--> SCOPE: Scope is the rule that decides where a variable can be accessed or used in a program.- - - - - - 

let numberOne = 90 //--> Global scope starts here, even outside of the function the variable (numberOne) can be executed.

function scope(){
    let numberTwo = 80
  //  console.log(numberOne)
  //  console.log(numberTwo) //--> local scope ends here, outside of this function the variable (numberTwo) cant be executed.
}

scope()

// console.log(numberOne)

// console.log(numberTwo) //--> outside of this function the variable (numberTwo) cant be executed.


//------------------SCOPING LEVEL-------------------------------------------------
//--PROGRAM-1:
function one(){
    username = "saikiran"
    function Two(){
        password = 88976
       // console.log(username ,password)
    }
    Two()
}
one()
//--------------------------------------------------------------------------------
//--PROGRAM-2:
if(true){
    function one(){
        username = "upparipalli "
        function two(){
            firstname = "saikiran"
          //  console.log(username + firstname)

        }
        two()
    }
    one()

}
//-------------------------------------------------------------------------------
//--PROGRAM-3:
if(true){
    username = "saikiran"
    if(username === "saikiran"){
        channel = "chai aur code"
      //  console.log(`welcome to ${channel} youtube channel ${username}`)

    }
    //console.log(username)
}
//-------------------------------------------------------------------------------

//--------------DEFINING FUNCTION METHODS----------------
//---METHOD-1
function definingFun(num1){
    num1 = 8
    console.log(num1)
}
definingFun()

//---METHOD-2
let definingFun2 = function(value){
    value = 90
    console.log(value)
}

definingFun2()

/*-------| Method   | How it’s written          | Key idea                         |
         | -------- |-------------------------  | -------------------------------- |
         | Method 1 |`function name(){}`        | Function is defined directly     |
         | Method 2 |`variable = function(){}`  | Function is stored in a variable |  */

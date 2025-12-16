// Always compare same datatype values to avoid unexpected results 
// === operator checks for both value and type equality 
   let num1=44;
   let num2="44";
    console.log(num1===num2); // false
/* == operator checks only value equality 
     Dont use == operator to avoid issues.
   */
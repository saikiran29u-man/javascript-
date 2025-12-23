//-->NORMAL LOOP 
for (let i = 0; i <=5; i++) {
    //console.log(i)
    
}

//EXAMPLE FOR WORKING OF LOOPS INSIDE OF LOOPS
for (let i = 0; i <=5; i++) {
//    console.log(`OUTER LOOP VALUE ${i}`)
    for (let j = 0; j <=5; j++) {
//        console.log(`INNER LOOP VALUE ${j} and inner loop ${i} `)
    }
}

//--> EXAMPLE FOR MULTIPLICATION TABLE
for (let i = 1; i <=10; i++) {
    // console.log(`OUTER LOOP VALUE ${i}`)
    for (let j = 1; j <=10; j++) {
        console.log(`INNER LOOP VALUE ${j}`)
        // console.log(i +  '*' + j + '=' + i*j);
    }
}


const myArray = [0,4,85,2]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    console.log(element);

}

// -------------BREAK AND CONTINUE KEYWORD-------------------

for (let index = 1; index <=10; index++) {
    if (index ==6){
        console.log("i found value 6")
        break //--> break keyword
    }
     console.log(`the value of index is: ${index}`)
     
}
for (let index = 1; index <=10; index++) {
    if (index ==6){
        console.log("i found value 6")
        continue //--> continue keyword
    }
    console.log(`the value of index is: ${index}`)
     
}
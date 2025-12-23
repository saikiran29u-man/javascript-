/* -----NOTE: FOR-OF LOOP DIRECTLY STORES THE TOTAL OBJECT/ARRAY AND EXECUTE.
------------- IN FOR-IN LOOP WE HAVE TO ASSIGN "VALUES" TO "KEYS". 
AS OF NOW WE USE FOR-IN LOOP FOR OBJECT AND FOR ARRAY WE USE FOR-OF LOOP*/

// -------------forof loop -------------------------------
let myArr = [2,9,48,7]
//--> Understand for-of loop in a way that, assigning a new variable inside condition and making it hold 
// the outside varibale/array/object.
for (const element of myArr) {
    // console.log(element)
}

//---------------------MAPS------------------------------------------------------------------
// --> Maps:The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//  Map objects are collections of key-value pairs.
//  A key in the Map may only occur once; it is unique in the Map's collection.
const map = new Map()
map.set('Name', 'saikiran')
map.set('age','22')
map.set('qualification','btech')

console.log(map)

for (const [key,value] of map) {
    // console.log(key,':', value)
}
// NOTE: As of now lets keep it basic.We will learn in detail in coming files.
// ------------------------------------------------------------------------------------------

const myObject ={
    Name: 'saikiran',
    age:'22',
    qualification:'btech'
     
}

//--------------forin loop-----------------------------------------
for (const key in myObject) {
    console.log(`${[key]}: ${myObject[key]}`)
    /* steps: 1.const key stores myobject in the format of key and value.
              2.In console line, myObject[key] → gets the value for that property. */
}
// -----------------------------------------------------------------
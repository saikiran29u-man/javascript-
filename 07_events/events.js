/* event propogation: Event propagation is the mechanism by which an event travels through the DOM,
moving from parent elements to the target element and back, following capturing, target, and bubbling phases.

bubbling phase: child → parent → body → document  (consider bubbling as false)
capturing phase: document → body → parent → child (consider capturing as true)
target phase: child (button) 
e.g:  
 document.getElementById('images').addEventListener('click',()=>{
        console.log("images got clicked")
    },true) //--> capturing phase
    document.getElementById('google').addEventListener('click',function(event){
    console.log('google clicked')
    event.preventDefault()
    // console.log('google clicked')
},false) //--> bubling phase

stop propogation: stopPropagation() is used to stop event bubbling or capturing in the DOM.
e.g:
  document.getElementById('images').addEventListener('click',()=>{
        console.log("images got clicked")
    },true) //--> capturing phase
    document.getElementById('google').addEventListener('click',function(event){
    console.log('google clicked')
    event.preventDefault()
    event.stopPropagation()
    // console.log('google clicked')
},false) //--> bubling phase 

*/

const images = document.querySelector('#images')

images.addEventListener('click', function(event){
    if(event.target.tagName === 'IMG'){
        let remove = event.target.parentNode
        //remove.remove()
        remove.parentNode.removeChild(remove)
    }
// tagName,pareNode events ... 
}) 

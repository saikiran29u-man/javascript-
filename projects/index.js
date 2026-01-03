
const userPass = document.querySelector('.input-box')
const instCodes = document.querySelector('.instruction')
const barCont = document.querySelector('.strength-container')
const bars = document.querySelector('.strength-bar')
const barVar = document.querySelector('.labels')
const sbtButton = document.querySelector('.check-btn')
const para = document.querySelector('.instruction')

// let passWord = true
let passleng = true
 
let passStore = []

sbtButton.addEventListener('click',function(event){
   event.preventDefault()
   const userInput = userPass.value
   console.log(userInput)
  
})




function conditions(userInput){
   if(passleng === 8){
      alert('enter 8 chars ')
   }
}




















const button = document.querySelector('.check-btn')
button.addEventListener('click',(event)=>{
   event.preventDefault();

})
const additionButton = document.querySelector('#addition');
const substractionButton =document.querySelector('#substraction');
const multiplicationButton = document.querySelector('#multiplication');
const divisionButton=document.querySelector('#division');
const inputOne = document.querySelector('#input-one');
const inputTwo = document.querySelector('#input-two');
const resultValue = document.querySelector('#resultValue');
const resetButton=document.querySelector('#resetButton');

additionButton.addEventListener('click', () => {
    const valueOne = +inputOne.value;
    const valueTwo = +inputTwo.value;
    const addresult = valueOne + valueTwo;
 if (addresult < 0) {
    resultValue.innerHTML=resultValue.style.color='red';
 }
 else{
    resultValue.innerHTML=resultValue.  style.color='green'     
 }
    
    // alert(` Addition is: ${valueOne + valueTwo}`);
resultValue.innerHTML = addresult;
} );
// for substraction button
substractionButton.addEventListener('click',()=>{
    const valueOne = +inputOne.value;
    const valueTwo = +inputTwo.value;
    const subresult = valueOne - valueTwo;
    if (subresult < 0) {
        resultValue.innerHTML=resultValue.style.color='red';
     }
     else{
        resultValue.innerHTML=resultValue.  style.color='green'     
     }
       
 
    // alert(` Addition is: ${valueOne + valueTwo}`);
resultValue.innerHTML = subresult;
})

// for multiplication button
multiplicationButton.addEventListener('click',()=>{
    const valueOne = +inputOne.value;
    const valueTwo = +inputTwo.value;
    const mulresult = valueOne*valueTwo;
    if (mulresult < 0) {
        resultValue.innerHTML=resultValue.style.color='red';
     }
     else{
        resultValue.innerHTML=resultValue.  style.color='green'     
     }
       
  
    resultValue.innerHTML=mulresult;
})

//For divison button
divisionButton.addEventListener('click',()=>{
    const valueOne = +inputOne.value;
    const valueTwo = +inputTwo.value;
    const divresult = valueOne/valueTwo;
    if (divresult < 0) {
        resultValue.innerHTML=resultValue.style.color='red';
     }
     else{
        resultValue.innerHTML=resultValue.  style.color='green'     
     }
       
    if (divresult=='Infinity') {
        resultValue.innerHTML="Cannot Divide By 0";
    }
 else{
    resultValue.innerHTML=divresult   
 }

})

resetButton.addEventListener('click', ()=>{
   inputOne.value="";
   inputTwo.value="";
   resultValue.innerHTML ="";
});
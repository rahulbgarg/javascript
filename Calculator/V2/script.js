// numbers 
const numOne = document.querySelector('#one');
const numTwo = document.querySelector('#two');
const numThree = document.querySelector('#three');
const numFour = document.querySelector('#four');
const numFive = document.querySelector('#five');
const numSix = document.querySelector('#six');
const numSeven = document.querySelector('#seven');
const numEight = document.querySelector('#eight');
const numNine = document.querySelector('#nine');
const numZero = document.querySelector('#zero');
const dot = document.querySelector('#dot');
const dlt = document.querySelector('#dlt');

//operators 
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const equal = document.querySelector('#equal');
const square = document.querySelector('#square');
const cube = document.querySelector('#cube');
const reset = document.querySelector('#resetButton');

//resultOutput 
const result = document.querySelector('.output');


// events 
numOne.addEventListener('click' , () => {
    result.innerHTML += '1';
});
numTwo.addEventListener('click' , () => {
    result.innerHTML += '2';
});
numThree.addEventListener('click' , () => {
    result.innerHTML += '3';
});
numFour.addEventListener('click' , () => {
    result.innerHTML += '4';
});
numFive.addEventListener('click' , () => {
    result.innerHTML += '5';
});
numSix.addEventListener('click' , () => {
    result.innerHTML += '6';
});
numSeven.addEventListener('click' , () => {
    result.innerHTML += '7';
});
numEight.addEventListener('click' , () => {
    result.innerHTML += '8';
});
numNine.addEventListener('click' , () => {
    result.innerHTML += '9';
});
numZero.addEventListener('click' , () => {
    result.innerHTML += '0';
});


plus.addEventListener('click' , () => {
    result.innerHTML += '+';
});
minus.addEventListener('click' , () => {
    result.innerHTML += '-';
});
divide.addEventListener('click' , () => {
    result.innerHTML += '/';
});
multiply.addEventListener('click' , () => {
    result.innerHTML += '*';
});
square.addEventListener("click", () => {
    result.innerHTML = result.innerHTML*result.innerHTML;
  });
  cube.addEventListener("click", () => {
      result.innerHTML = result.innerHTML*result.innerHTML*result.innerHTML;
    });
    dot.addEventListener("click", () => {
      result.innerHTML += ".";
    });
  equal.addEventListener("click", () => {
      result.innerHTML = eval(result.innerHTML)
  });
  resetButton.addEventListener('click',()=>{
      result.innerHTML = "";
  })
  dlt.addEventListener('click',()=>{
      result.
  innerHTML = result.innerHTML.toString().slice(0,-1);
  })











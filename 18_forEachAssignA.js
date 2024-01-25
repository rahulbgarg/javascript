console.log(`----------------------------------------------------------------step 1---------------------------------------------------------`);

console.log(`Array Traversing using forEach loop with index and it's element=> `);

const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Original Array is => [${arrayNumbers}]`);

arrayNumbers.forEach( (element,indexOfElement) => {
console.log(indexOfElement, " ==>",element);
});

console.log(`----------------------------------------------------------------step 2---------------------------------------------------------`);

console.log(`Original Array is => [${arrayNumbers}]`);
console.log(`Positive numbers are => `);
arrayNumbers.forEach( (element) => {
    if (element>0) {
            console.log(element);
    }
});

console.log(`----------------------------------------------------------------step 3---------------------------------------------------------`);

console.log(`Original Array is => [${arrayNumbers}]`);
const negativeNumbers=[];
arrayNumbers.forEach( (element) => {
    if (element<0) {
            negativeNumbers.push(element);
    }
});
console.log(`Negative Numbers array form original array is => [${negativeNumbers}]`);

console.log(`----------------------------------------------------------------step 4---------------------------------------------------------`);

console.log(`Original Array is => [${arrayNumbers}]`);
console.log(`Even Numbers form original array is => `);
const evenNumbers=[];
arrayNumbers.forEach( (element) => {
    if (element%2==0) {
            evenNumbers.push(element);
    }
});
evenNumbers.forEach((element)=>{
    console.log(element);
});

console.log(`----------------------------------------------------------------step 5---------------------------------------------------------`);
let sum=0;
console.log(`Original Array is => [${arrayNumbers}]`);
arrayNumbers.forEach((element)=>{
    sum+=element;
});
console.log(`Sum of all elements => ${sum}`);

console.log(`----------------------------------------------------------------step 6---------------------------------------------------------`);

console.log(`Original Array is => [${arrayNumbers}]`);
console.log(`Even indexed values are => `);
arrayNumbers.forEach((element,index)=>{
   if(index%2==0){
    console.log(element);
   }
});

console.log(`----------------------------------------------------------------End------------------------------------------------------------`);

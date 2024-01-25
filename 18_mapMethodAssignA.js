
console.log(`----------------------------------------------------------------step 1---------------------------------------------------------\n`);

const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Original Array is => [${arrayNumbers}]`);
const arrayAdd10 = arrayNumbers.map((element) => {
    return element+10;
});
console.log(`After adding 10 into each element new array is => [${arrayAdd10}]\n`);

console.log(`----------------------------------------------------------------step 2---------------------------------------------------------\n`);

console.log(`Original Array is => [${arrayNumbers}]`);
const cubeOfArray = arrayNumbers.map((element) => {
    return element*element*element;
});

console.log(`Cube of each array element => [${cubeOfArray}]\n`);

console.log(`----------------------------------------------------------------step 3---------------------------------------------------------\n`);

console.log(`Original Array is => [${arrayNumbers}]`);
const addingEachIndex = arrayNumbers.map((currentValue,index) => {
    return index+currentValue;
});
console.log(`after adding index value into curresponding array element => [${addingEachIndex}]\n`);

console.log(`------------------------------------------------------------------End----------------------------------------------------------\n`);

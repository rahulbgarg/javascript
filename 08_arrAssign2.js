const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]

console.log(`===============STEP I===============`);
console.log(`Original Array is :- ${arrayNumbers}`);

console.log(`Length of array is :- ${arrayNumbers.length}`);
console.log(`===============STEP II===============`);
arrayNumbers[0] , arrayNumbers.length-1;
console.log(`First Element ===> ${arrayNumbers[0]} , Last Element ===> ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`===============STEP III===============`);
console.log(`Third Last Element ===> ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`===============STEP IV===============`);
console.log(`Even Numbers in Array:`);
for (const number of arrayNumbers) {
    if (number%2==0) {
        console.log(number);        
    }
}

console.log(`===============STEP V===============`);
console.log(`Odd Numbers in Array:`);
for (const number1 of arrayNumbers) {
    if (number1%2==1) {
        console.log(number1);        
    }
}

console.log(`===============STEP VI===============`);
console.log(`Original Array is :- ${arrayNumbers}`);
let sumOfEve=0;
for (const sumIndex in arrayNumbers) {
    if (sumIndex%2==0) {
        sumOfEve=sumOfEve+arrayNumbers[sumIndex];
    }
}
console.log(`Sum of even positioned elements  :- ${sumOfEve}`);

console.log(`===============STEP VII===============`);

console.log(`Original Array is :- ${arrayNumbers}`);
let sumOfOdd=0;
for (const oddIndex in arrayNumbers) {
    if (oddIndex%2==1) {
        sumOfOdd=sumOfOdd+arrayNumbers[oddIndex];
    }
}
console.log(`Sum of odd positioned elements  :- ${sumOfOdd}`);

console.log(`===============STEP VIII===============`);
let sumall = 0;
console.log(`Sum of an array ==>`);

for (const sum0 of arrayNumbers) {
sumall += sum0;
   

}console.log(sumall);

console.log(`===============STEP IX===============`);
console.log(`Even Numbers in Array:`);
for (const number of arrayNumbers) {
    if (number%5==0) {
        console.log(number);        
    }
}
console.log(`===============STEP X===============`);
console.log(`Original Array is :- ${arrayNumbers}`);
const check=arrayNumbers.includes(115);
console.log(`In original array '115' is available :- ${check}`);

console.log(`===============STEP XI===============`)
;console.log(`Original Array is :- ${arrayNumbers}`);
const check1=arrayNumbers.includes(23);
console.log(`In original array '23' is available :- ${check1}`);

console.log(`===============STEP XII===============`)
const arrayNumbers1 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`Given Array is ==> ${arrayNumbers1}`);
arrayNumbers1.splice(3,0,55,66);
console.log(`After inserting '55','66' numbers at index 3 then Updated array is :-\n ${arrayNumbers1}`);

console.log(`===============STEP XIII===============`)
const arrayNumbers2=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Original Array is :- ${arrayNumbers2}`);
arrayNumbers2.splice(4,3);
console.log(`After deleting 3 numbers from index 4 then Updated array is :-\n ${arrayNumbers2}`);

console.log(`===============END===============`)
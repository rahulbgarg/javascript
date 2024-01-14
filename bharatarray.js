console.log(`----------------------------------------------------Step 1---------------------------------------------------------- \n`);

const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Original Array is :- ${arrayNumbers}`);

console.log(`Length of array is :- ${arrayNumbers.length}`);

console.log(`----------------------------------------------------Step 2---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
console.log(`First Element of Array is :- ${arrayNumbers[0]}`);
console.log(`Last Element of Array is :- ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`----------------------------------------------------Step 3---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
console.log(`First Element of Array is :- ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`----------------------------------------------------Step 4---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
console.log(`Even Numbers are :`);
for (const even of arrayNumbers) {
    if(even%2==0){
        console.log(even);
    }
}

console.log(`----------------------------------------------------Step 5---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
console.log(`Odd Numbers are :`);
for (const Odd of arrayNumbers) {
    if(Odd%2==1){
        console.log(Odd);
    }
}

console.log(`----------------------------------------------------Step 6---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
let sumOfEve=0;
for (const sumIndex in arrayNumbers) {
    if (sumIndex%2==0) {
        sumOfEve=sumOfEve+arrayNumbers[sumIndex];
    }
}
console.log(`Sum of even positioned elements  :- ${sumOfEve}`);


console.log(`----------------------------------------------------Step 7---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
let sumOfOdd=0;
for (const oddIndex in arrayNumbers) {
    if (oddIndex%2==1) {
        sumOfOdd=sumOfOdd+arrayNumbers[oddIndex];
    }
}
console.log(`Sum of odd positioned elements  :- ${sumOfOdd}`);

console.log(`----------------------------------------------------Step 8---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
let sumOfAll=0;
for (const elem of arrayNumbers) {
    sumOfAll=sumOfAll+elem;
}
console.log(`Sum of All elements  :- ${sumOfAll}`);

console.log(`----------------------------------------------------Step 9---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
console.log(`Multiple of 5 nos are :-`);
for (const multiOf5 of arrayNumbers) {
 if (multiOf5%5==0) {
    console.log(multiOf5);
 }   
}

console.log(`---------------------------------------------------Step 10---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
const check=arrayNumbers.includes(115);
console.log(`In original array '115' is available :- ${check}`);


console.log(`---------------------------------------------------Step 11---------------------------------------------------------- \n`);

console.log(`Original Array is :- ${arrayNumbers}`);
const check2=arrayNumbers.includes(23);
console.log(`In original array '23' is available :- ${check2}`);

console.log(`---------------------------------------------------Step 12---------------------------------------------------------- \n`);

const arrayNumbers1=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Original Array is :- ${arrayNumbers1}`);
arrayNumbers1.splice(3,0,55,66);
console.log(`After inserting '55','66' numbers at index 3 then Updated array is :- ${arrayNumbers1}`);


console.log(`---------------------------------------------------Step 13---------------------------------------------------------- \n`);

const arrayNumbers2=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Original Array is :- ${arrayNumbers2}`);
arrayNumbers2.splice(4,3);
console.log(`After deleting 3 numbers from index 4 then Updated array is :- ${arrayNumbers2}`);

console.log(`------------------------------------------------------End----------------------------------------------------------- \n`);
console.log("-------------------STEP 1-------------------");

function greaterNumber(n1, n2){
    console.log(`Given Numbers are: ${n1} and ${n2}`);
    var result = n1>n2 ? `"${n1}" is greater than "${n2}"` : `${n2} is greater than ${n1} `;
    console.log(result)
}

greaterNumber(10,-10)
greaterNumber(800, 899)

console.log("-------------------STEP 2-------------------");

function isEvenOrOddNum(s1){
console.log(`Given number is: ${s1}`);
var evenResult = s1%2==0 ? `true (Given number is "Even")` : `false (Give number is "Odd")` 
console.log(evenResult);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("-------------------STEP 3-------------------");

function wordLength(s2){
var lengthCheck = s2.length;
console.log(`Given Word is: ${s2} and its length is: ${lengthCheck}`);
var wordCheck = lengthCheck%2==0 ? `true (it is "Even")`:`(false it is "Odd")`
console.log(wordCheck);
}
wordLength("Javascript");
wordLength("Developer");
wordLength("Google");
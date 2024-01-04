console.log("***************** Step I *******************");

var oddEven = function(n1){
    if(n1 % 2 == 0){
return "EVEN";
} else{
    return "ODD";
}

}
var result=oddEven(45);
console.log(`45 Given Number is ${result}`);
var result=oddEven(70);
console.log(`70 Given Number is ${result}`);
var result=oddEven(67);
console.log(`67 Given Number is ${result}`);
var result=oddEven(98);
console.log(`98 Given Number is ${result}`);
console.log("***************** Step II *******************");

var eligibility = function(n2){
    if(n2 >= 18 ){
return "Eligible";
} else{
    return "Not Eligible";
}

}
var result=eligibility(18);
console.log(`18 Given Number is ${result}`);
var result=eligibility(20);
console.log(`20 Given Number is ${result}`);
var result=eligibility(17);
console.log(`17 Given Number is ${result}`);
var result=eligibility(40);
console.log(`40 Given Number is ${result}`);


console.log("***************** Step III *******************");

var checkStart = function(word){
    if(word.startsWith("Java")){    
console.log(`Given word ${word} starts with "Java"`);
    }else{
        console.log(`Given word ${word} does not start with "Java"`);
    }
}
checkStart("Javascript Language");
console.log("***************** Step IV *******************");

let myString = "Javascript-ES6";

if (myString.length > 10) {
    console.log("The string contains more than 10 characters.");
} else {
    console.log("The string does not contain more than 10 characters.");
}


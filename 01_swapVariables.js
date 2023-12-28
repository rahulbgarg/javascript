console.log("***************** Step I *******************");
console.log("Before swaping names:");
var sweety= "Sweety";
var cutie= "Cutie";
console.log("Sweety -->",sweety);
console.log("Cutie--->", cutie);

console.log("After swaping names:");
var temp = sweety;
sweety=cutie;
cutie=temp;
console.log("Sweety -->",sweety);
console.log("Cutie--->", cutie);
console.log("***************** Step II *******************");
console.log("Before swaping numbers:");
var num1= "100";
var num2= "200";
var num3= "300";
console.log("Num 1 -->",num1);
console.log("Num 2--->", num2);
console.log("Num 3--->", num3);


console.log("After swaping names:");
var temp = num2;
var temp1 = num1;
num1=num2;
num2=num3;
num3= temp1;
console.log("Num 1 -->",num1);
console.log("Num 2--->", num2);
console.log("Num 3--->", num3);
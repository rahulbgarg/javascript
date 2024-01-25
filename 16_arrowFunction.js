

//Arrow Function with no arg and no return value
const show = () => {
    console.log(`Arrow Function with no arg and no return value`);
}
show();


//2 Arrow function with argument and no return value
const add =(num1 , num2 ) => {
console.log(`Addition is : ${num1+num2}`);
}
add(12,30);

//3 Arrow function with argument and return value 
const multiply=(n1,n2) => {
// const result=(n1*n2)
// return result;
return n1*n2

}
const value = multiply(2,4);
console.log(value);
 
// WAP with input value 'JAVASCRIPT' and will return total number of character
const alpha =(ch)=>{
    return ch.length;
};
// const result1=alpha("JAVASCRIPT");
// console.log(result1);
console.log(alpha("JAVASCRIPT"));

console.log(`----------------------------------step 1--------------------------------`);
const greet= ()=>{
    console.log(`Good Morning , Today is Saturday`);
}
greet();
console.log(`----------------------------------step 2--------------------------------`);
//
const multiply=(n1,n2,n3=1)=>{
    console.log(`Multiplication is : ${n1*n2*n3}`);
}
multiply(5,5,2)
multiply(10,4)
//
console.log(`----------------------------------step 3--------------------------------`);
const add = (a1, a2, a3, a4, a5) => {
    return a1 + a2 + a3 + a4 + a5;
  }
  
  console.log(`Addition is ==> ${add(100, 100, 200, 349, 756)}`);
  console.log(`Addition  is ==> ${add("I am", " learning", " ES6", " features", " in depth")}`);
  
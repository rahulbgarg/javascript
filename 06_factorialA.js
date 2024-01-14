console.log('------------------------Assignment A-----------------------');

let factorialOfNum = function (number) {
    var result=1;
    if (number==0 || number==1) {
        return 1;
    }
    if (number<0 ||number==undefined ||number == null || isNaN(number)) {
        return `${number} => Invalid input u are given.`;
    }
       for (let i = 1; i <= number; i++) {
        result=result*i;        
    }
    return result;
}

console.log(`Factorial of 5 is '${factorialOfNum(5)}'`);

console.log(`Factorial of 3 is '${factorialOfNum(3)}'`);

console.log(factorialOfNum(null));

console.log(`Factorial of 8 is '${factorialOfNum(8)}'`);

console.log(factorialOfNum(undefined));

console.log(`Factorial of 9 is '${factorialOfNum(9)}'`);

console.log(`Factorial of 0 is '${factorialOfNum(0)}'`);

console.log('----------------------End---------------------------------');
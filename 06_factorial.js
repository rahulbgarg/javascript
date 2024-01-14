let factorial = function(num){
    if (num==0 || num==1) {
        return 1;
    }
    let result = 1;
    for (let index = 1; index <= num; index++) {
    result= result*index;   
    }
    return result;
}

console.log(`result==>${factorial(5)}`);

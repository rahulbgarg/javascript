console.log('-------------------------------Assignment B-----------------------------\n');

let factorialOfWordsCount = function (str) {
    let numLength;
    var result=1;

    if (str == undefined || str == null ) {
         return `${str} => Invalid input u are given.`;
     } 
    
     else if (str == "" ||str ==" ") {
        numLength=0;
    } else if(isNaN(str)){
        let num=str.split(" ");
        numLength=num.length;   
    }else {
        console.log(`its a number`);
        numLength=str;
    }  
    if (numLength==0 || numLength==1) {
        console.log(`Total no of words available in given string "${str}" => '${numLength}'`);
        return 1;
    }
    else if (numLength<0 ) {
        return `${numLength} => Invalid input given.`;
    }
       for (let i = 1; i <= numLength; i++) {
        result=result*i;        
    }
    
    console.log(`Total words in given string \n"${str}" => '${numLength}'`);
    return result;
}
console.log(`Factorial is => '${factorialOfWordsCount("Revision is the mother of Success")}'\n`);
console.log(`Factorial is => '${factorialOfWordsCount("We never fail, we always learn, Mind it")}'\n`);
console.log(`Factorial is => '${factorialOfWordsCount("Rahul Bharat Garg")}'\n`);
console.log(`Result is => '${factorialOfWordsCount(null)}'\n`);
console.log(`Factorial is => '${factorialOfWordsCount("")}'\n`);

console.log('-----------------------------------End------------------------------------\n');
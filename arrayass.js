console.log(`------------------------Removing duplicate elements using for loop---------------------------------`);
const arrayNum=[11,3,4,11,4,7,3];
// Using Set to remove duplicates
let uniqueArray = [...new Set(arrayNum)];
console.log("Original Array==> ", arrayNum);

 console.log("After removing duplicate element from array is =>", uniqueArray );


 console.log(`----------------------------------step 2--------------------------------`);
 const str = "How are you mate";
 console.log(`Original ==> "${str}"`);
 let resultString = "";
 
 for (let i = 0; i < str.length; i++) {
   if (i==0 || i== str.length-1) {
        resultString += str[i].toUpperCase();     
   } else if(str[i-1]==" " || str[i+1]==" "){
    resultString += str[i].toUpperCase();                          
   }else{
        resultString += str[i].toLowerCase();
    }
 }
 console.log(`Result ==> "${resultString}"`);

 console.log(`---------------------------------------End-------------------------------------------`);
 

  
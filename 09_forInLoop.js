let array = [11, 22, 33, 44, 55, 66, 77];

console.log(`Traversing an array using for in loop..`);

for (const index in array) {

   console.log(array[index]);

}

let sum = [11, 22, 33, 44, 55, 66, 77];

console.log(`Sum an array using for in loop..`);
let add = 0;
for (const index1 in sum) {

   //console.log(sum[index1]);  // traverse logic
add= add+sum[index1]   // sum logic
}
console.log(`Sum an array using for in loop..${add}`);

console.log(`==================================================`);

console.log(`Traversing an array using for of loop..`);

for (const element of array) {

   console.log(element); 

}

let arrNum = [4,5,6,7,3];
let sum2 = 0;
console.log(`Sum of an array using for of loop..`);

for (const sum0 of arrNum) {
sum2 += sum0;
   

}console.log(sum2); 


console.log(`==== WAP to count the vowels from the given string=======`);

const str = "Developer UI and Backend";

const vowels = "aeiou";

let count = 0;

for (const char of str) {

    console.log(char);

    if (vowels.includes(char.toLowerCase())) {

        count++;

    }

}

console.log(`Vowels count is: ${count}`);

console.log(`=======join method=====================`);

let arrayOfFriends = ["Jenny", "Elon", "Bill"];

const result = arrayOfFriends.join(",");  // can use anything like undersocre instead of comma 

console.log(typeof result);

console.log(result);


arrayOfFriends.reverse();

console.log(arrayOfFriends);

console.log(`===============********IMPORTANT*********=====================`);

const word = "Developer UI and Backend";

const arrayOfWords = word.split(" ");

console.log(arrayOfWords.length);

 

const reverseStr = word.split("").reverse().join("");

console.log(reverseStr);

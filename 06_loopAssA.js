console.log(`----------------------------Step I---------------------------------`);

var countVowels =function (str) {
    console.log(`Given string is : ${str}`);
   let count=0;
   for (let index = 0; index < str.length; index++) {
    let char=str.charAt(index).toLowerCase();
    if(char=='a' ||char=='e' ||char=='i' ||char=='o' ||char=='u' )
        count++;
    }
    console.log(`Total Number of Vowels in string are : ${count}`);
}
countVowels("I am very good IT Developer");

console.log(`---------------------------Step II------------------------------- `);

var sumOfCubeOfNum=function(){
    let sum=0;
    for(let i=1;i<=5;i++){
        sum=sum+i*i*i;
    }
    console.log(`Sum of cube of 1 to 5 numbers are : ${sum}`);
}
sumOfCubeOfNum();

console.log(`------------------------Step III--------------------------------- `);

function oddPositionnedChars(str) {
    console.log(`Given String is : ${str}`);
    for (let index = 0; index < str.length; index++) {
        if(index%2==1 && str.charAt(index)!=" "){
            console.log(str.charAt(index));
        }
    }
}
oddPositionnedChars("Hard work always pays back");
oddPositionnedChars("Soon I will be UI IT Champ");

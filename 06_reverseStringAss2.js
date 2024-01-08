console.log(`----------------------Start--------------------------- \n`);

var reverseString=function(str){
    var reverse="";
    console.log(`Given string is :- ${str}`);
    for(i=str.length-1;i>=0;i--){
       var char=str.charAt(i);
       if(char!=" "){
            reverse=reverse+str.charAt(i);
        }
     }
console.log(`Reverse of Given String is : ${reverse}\n`);    
}
reverseString("Hard work always pays back");
reverseString("Soon I will be UI IT Champ");

console.log(`---------------------------END------------------------ \n`)
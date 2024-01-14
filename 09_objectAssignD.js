console.log(`==========================Step 1 : OBJECT CREATION==========================`);
let professor={
    name:"Ajay Kumar",
    age:42,
    job:"Assistant Prof.",
    isMarried: true,
    loctaion: "Pune",
    degree:{
        Engineering:"CSC",
        PHD:"Adv.Computing",
        Institute:"SKNCOE",
        University:"SPPU"   
    },
    certification:["Hacker Rank Participation", "Certificate in IFE Course", "Certificate in Adv Programming"]

}
console.log(professor);
console.log(`==========================Step 2 : Degree Addition==========================`);
console.log(professor.degree);
console.log(`==========================Step 3 : Array name Certification==========================`);
console.log(professor.certification);
console.log(`==========================Step 4 : New Property ==> Total Experience==========================`);

professor.totalExperience="14 years";
console.log(professor.totalExperience);
console.log(`==========================Step 5 : Property Update ==> Total Experience==========================`);
professor.totalExperience="12 Years";
console.log(professor.totalExperience);
console.log(`====================Step 6: New Certification add on end of array====================`);
professor.certification.splice(2,0,"Orcale Certified")
console.log(professor.certification);
console.log(`====================Step 7: Last Certification on end of array====================`);
console.log("New Certification add on end of array:", professor.certification[professor.certification.length - 1]);


console.log(`==========================Step 8 : Complete object log==========================`);
for (const key in professor) {
    if (Object.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);     
    }
}

console.log(`==========================Step 9 : Traverse Of Certification==========================`);
for (const iterator of professor.certification) {
        console.log(iterator);
    }
    

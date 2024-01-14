

const developer = {
    name: "Rahul",
    age:23,
    isMarried: false,
    skills: ["HTML", "CSS", "JAVASCRiPT"]
}

const newDeveloper =  Object.assign({}, developer); //clone or duplicate 
newDeveloper.name= "Garg";
console.log(developer);
console.log(newDeveloper);


const user ={
    name: "Bill",
    designation: "CEO",
   
}

const address={
city:"LA",
country: "USA",
pin:112233
}

Object.assign(user, address);
console.log(user);
console.log(address);


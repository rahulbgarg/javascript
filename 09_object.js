
let person = {
    name: "Rahul",
    age:23,
    isMarried: false,
    skills: ["HTML", "CSS", "JAVASCRiPT"]
}
console.log(person);

// to read a particular value 
console.log(person.age); // dot notation
console.log(person["age"]); // square breacket notation

// to add value
person.designation= "Student";
console.log(person);

person.age= 24; //update 
console.log(person);

person.isMarried = true  //update
console.log(person);

// for tabular format

console.table(person)

delete person.designation; // delete 
console.log(person);

// empty object
console.log(`Empty Object ....`)
let address={

};

address.city= "Pune"

console.log(address);



let user = {
    name: "Jenny",
    country: "USA",
    address:{ 
        city: "Pune",
        street: "Katraj",
        pin: 411041,
        getAddress: function(){  //anonnymous function means it has no name 
console.log(`Complete address: ${this.street},${this.city},${this.pin},${this.flatNo}`); // this ==> it is reference variable 
        }
    },
    show: function(){   // similar to Function Expression 
        console.log(`Inside Show Function`)
    }
}
console.log(user);

let country2 = user.country
console.log(country2);

// to see inside the function
// console.log(user.show);  Dumbfuck beacuse show is also property like other
 // or 
 user.show();
 console.log(user.address.pin);

 user.address.flatNo=303;
 console.log(user.address);

 user.address.getAddress();

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element);        
    }
}

console.log(person.skills);

person.skills.push("REACT");
console.log(person.skills);

person.skills.shift();
console.log(person.skills);

console.log(`==========================================================`);
const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);
console.log(`Is 'values' array ==>  ${Array.isArray(values)}`);
for (const element of values) {
    console.log(element);  
}

console.log(`Object entries....`);
const entries= Object.entries(person);
for (const element of entries) {
    console.log(element);
}
console.log(`Accessing nested array element using double [] [] brackets`);
console.log(entries[0][0]);
console.log(entries[0][1]);
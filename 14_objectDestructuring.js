let person = {
  firstName: "Rahul",
  age: 32,
  isMarried: false,
  city: "Dhule",
  country: "INDIA",
};

// let firstName=person.firstName;
// let age=person.age;
// let city=person.city;
// let country=person.country;
// console.log(firstName,city,country,age);



let{ firstName,age,city,country}= person  //Object Destructuring
console.log(firstName,age,city,country);
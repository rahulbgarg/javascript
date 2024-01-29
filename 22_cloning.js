let n1 = 100;
let n2 = n1 ;
n1 = 444;
console.log(n1);
console.log(n2);

const user={
    name : "Jenny",
    age : 32
}

const developer = user 
developer.name = "Bill";
console.log(developer.name);
console.log(user.name);


//deep clone
//1.Spread Operator
//2.Object Assign()
//3.JSON.parse(), JSON.stringfy()

const person = {
    name: "Jenny",
    age: 32
}

console.log("=========================Deep Clone using spread operator==============================");
const boy = {...person};  // deep clone using spread operator
person.age=44;
console.log(boy.age);
console.log(person.age);


console.log("=========================Deep Clone using object.assign()==============================");
const smartBoy =Object.assign({}, boy);
smartBoy.name="Steve";
console.log(smartBoy.name);
console.log(boy.name);



console.log("=========================Deep Clone using JSON.parse and JSON.stringfy==============================");
const gentleMen ={
    name : "Elon Musk",
    age: 32,
    address:{

        pin: 333444,
        street : "Pune"
    }
}

// const gentleWoman= {...gentleMen};  // spread operator clone
const gentleWoman= JSON.parse(JSON.stringify(gentleMen));// main clone 
gentleWoman.address.street="Khau Galli"
console.log(gentleWoman.address.street);
console.log(gentleMen.address.street);
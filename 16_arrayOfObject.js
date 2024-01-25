class Student {

    // Data member or properties

    // Constructor

    constructor(id, name, city, marks ){
        this.id = id;
        this.name = name;
        this.city = city;
        this.marks = marks;
    }
    // Member Functions or methods
    getDetails(){
       console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);
    } 
}

const jenny = new Student(11, 'Jenny', 'Pune', 67);
const bill = new Student(43, 'Bill', 'Mumbai', 96);
const elon = new Student(32, 'Elon', 'Hyd', 83);
const stew = new Student(22, 'Stew', 'Pune', 75);
const ratan = new Student(65, 'Ratan', 'Mumbai', 90);

const arrayStudents = [jenny, bill, elon, ratan, stew];

// Program to traverse array of object

for (const element of arrayStudents) 
//    element.getDetails();  or  
console.log(element); // this or that 


//to find specific city student 
console.log(`======Find Students that belong to PUNE and HYD=========`);
for (const element of arrayStudents) {
    if (element.city=='Pune' || element.city=='Hyd') {
        element.getDetails();
    }
}

//
console.log(`=========WAP to prog to find avg marks=========`);
let totalMarks=0;
for (const element of arrayStudents) {
  totalMarks=totalMarks+  element.marks;
}
console.log(`Totol Marks of all students is ${totalMarks}`);
averageMarks = totalMarks/arrayStudents.length;
console.log(`Average Marks is ${averageMarks}`);

console.log(`==================WAP to find students whose name start with R or S==================`);
for (const element of arrayStudents) {
    if (element.name.startsWith('R') || element.name.startsWith('S')) {
        element.getDetails();
    }
}

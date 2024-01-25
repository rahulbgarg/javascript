class Student{
    //Data memebers or properties

    constructor (id,name,city,marks){
        this.id=id;
        this.name=name;
        this.city=city;
        this.marks=marks;
    }
    //Member function or methods
getDetails(){
    console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);
}
    //Construtctor
}
const jenny = new Student(11,"Jenny","Pune",70)
console.log(jenny.name);
jenny.getDetails()
//console.table(jenny);

const bill = new Student(22, "Bill", "LA", 60);
//console.table(bill);
bill.getDetails();

const elon = new Student(33, "Elon", "Mumbai", 90);
const stew = new Student(44, "Stew", "Bergen", 80);

console.log(`Traversing array of Object...`);
const arrayStudents = [ jenny, bill, elon, stew ];
for (const element of arrayStudents) {
    element.getDetails();

}


//WAP a program to log details of students having marks greater than 80
for (const Student of arrayStudents) {
    if (Student.marks>>80) {
        Student.getDetails();
    }
    
}
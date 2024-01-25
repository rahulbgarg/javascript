
class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getDetails(){
        console.log(`Employee ID => '${this.emp_id}', Employee Name => '${this.emp_name}', Employee Department => '${this.emp_dept}', Employee Salary => '${this.emp_salary}', Employee Company => '${this.emp_company}'`);
    }
}

const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS"); 
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

const allEmployee= [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`-------------------------------------------------------------------step 1------------------------------------------------------------`);

console.log(`Employees whoes from 'TCS' => `);
allEmployee.forEach((element)=>{
    if(element.emp_company=="TCS"){
        console.log(`Employee Name => '${element.emp_name}', Employee company => '${element.emp_company}'`);
    }
});

console.log(`-------------------------------------------------------------------step 2------------------------------------------------------------`);

console.log(`Employees whoes having salary grater than equals '50000' => `);
allEmployee.forEach((emp)=>{
    if (emp.emp_salary>=50000) {
        emp.getDetails();     
    }
});

console.log(`-------------------------------------------------------------------step 3------------------------------------------------------------`);

let sumOfSalary=0;
allEmployee.forEach((emp)=>{
sumOfSalary+=emp.emp_salary;
});
console.log(`Total of all employees salary => "${sumOfSalary}"`);

console.log(`-------------------------------------------------------------------step 4------------------------------------------------------------`);

console.log(`Avarage Salary of all employees => '${sumOfSalary/allEmployee.length}'`);

console.log(`-------------------------------------------------------------------step 5------------------------------------------------------------`);
console.log(`Employees whoes having department 'IT' or 'HR' and whoes having salary greater than equals 75000 =>`);
allEmployee.forEach((emp)=>{
    if(emp.emp_dept=='HR' || emp.emp_dept=='IT'){
        if (emp.emp_salary >= 75000) {
            emp.getDetails();
        }
    }
});

console.log(`---------------------------------------------------------------------End-------------------------------------------------------------`);
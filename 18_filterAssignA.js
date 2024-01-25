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

allEmployee.forEach( element => element.getDetails() );

console.log(`----------------------------------------------------------------step 1---------------------------------------------------------`);

allEmployee.filter((element)=>{
return element.emp_company=='TCS';
}).forEach((element)=>{
    console.log(`Company name => '${element.emp_company}', Employee name => '${element.emp_name}'`);
});

console.log(`----------------------------------------------------------------step 2---------------------------------------------------------`);

const wiproEmployee = allEmployee.filter((element)=>{
    return element.emp_company=='Wipro';
});
const sumOfSalary = wiproEmployee.reduce((runningTotal,element)=>{
return runningTotal+element.emp_salary;
},0);

const avarageOfWiproEmp =sumOfSalary/wiproEmployee.length;
console.log(`Employees whoes having company 'Wipro' => `);
wiproEmployee.forEach(element => element.getDetails());
console.log(`Avarage of Salary whoes company Wipro ==> ${avarageOfWiproEmp}`);

console.log(`----------------------------------------------------------------step 3---------------------------------------------------------`);

const wiproAndInfyComp = allEmployee.filter((element) => {
return element.emp_company == 'Wipro' || element.emp_company == 'Infy';
});

const reduceSalary= wiproAndInfyComp.reduce((rt,element)=>{
 return rt+element.emp_salary;
},0);
const avarageEmpSalary = reduceSalary/wiproAndInfyComp.length;
console.log(`Employees whoes having company 'Wipro' and 'Infy' => `);
wiproAndInfyComp.forEach(element=>element.getDetails());
console.log(`Avarage of salary whoes company Wipro and Infy ==> ${avarageEmpSalary}`); 

console.log(`------------------------------------------------------------------End----------------------------------------------------------`);

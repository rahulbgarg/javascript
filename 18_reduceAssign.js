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

const arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`----------------------------------------------------------------step 1---------------------------------------------------------`);

console.log(`List of all employees whoes having 'Wipro' Company =>`);
arrayEmps.filter(element => element.emp_company == 'Wipro').forEach(element => element.getDetails());

console.log(`----------------------------------------------------------------step 2---------------------------------------------------------`);

console.log(`List of all employees whoes having department 'IT' or 'HR' =>`);
arrayEmps.filter(element => element.emp_dept == 'IT' || element.emp_dept == 'HR').forEach(element => element.getDetails());

console.log(`----------------------------------------------------------------step 3---------------------------------------------------------`);

console.log(`List of all employees whoes having Id greater than 50 =>`);
arrayEmps.filter(element => element.emp_id>50).forEach(element=> element.getDetails());

console.log(`----------------------------------------------------------------step 4---------------------------------------------------------`);

console.log(`List of all employees whoes name start with 'A' or 'V' or 'M' =>`);
arrayEmps.filter(element => element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")).forEach(element => element.getDetails());

console.log(`----------------------------------------------------------------step 5---------------------------------------------------------`);

const sumOfSalary = arrayEmps.reduce((sumSalary,element)=> sumSalary+element.emp_salary,0);
const avarageOfSalary = sumOfSalary/arrayEmps.length;
console.log(`Avarage Salary of all employees => ${avarageOfSalary}`);

console.log(`----------------------------------------------------------------step 6---------------------------------------------------------`);

const itEmp = arrayEmps.filter(element => element.emp_dept=="IT");
const sumItSalary = itEmp.reduce((rt,element) => rt+element.emp_salary,0);
console.log(`Avarage Salary OF 'IT' Department => ${sumItSalary/itEmp.length}`);

console.log(`------------------------------------------------------------------End----------------------------------------------------------`);

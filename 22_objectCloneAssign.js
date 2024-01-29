console.log('======================Step 1=========================');
const array = [22,3,4,56,90,400,49]
console.log(`Original Array is => [${array}]`);
const arrayClone = array;
arrayClone.push(55,66)
console.log(`Cloned Array with added 55 and 66 => [${arrayClone}]`);

//step 2
console.log('======================Step 2=========================');
const array1 = [22,3,4,56,90,400,49];
const arrayClone1 = [...array1];
arrayClone1.splice(arrayClone1.indexOf(90),0,10,25);
console.log(`Array Before Adding => [${array1}]`);
console.log(`Array After Adding 10 and 25 =>[${arrayClone1}]`);

//step 3
console.log('======================Step 3=========================');
const array2 = [22,3,4,56,90,400,49];
console.log(`Original Array => [${array2}]`);
arrayEven=[2,30,14,8];
console.log(`Array to be merged =>[${arrayEven}]`);
const mergedArray=[...array2,...arrayEven];
console.log(`Array After Merging =>[${mergedArray}]`);

// //step 4 
console.log('======================Step 4 - 5=========================');
 const employee_info = {
    emp_id: 27,
    emp_name: "JohnDoe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "56,0000INR",
    },
    address: {
        location: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
    },
    mobile: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
const addressArray = [
    employee_info.address.location.colony,
    employee_info.address.location.street,
    employee_info.address.city,
    employee_info.address.state,
    employee_info.address.country
];

const mobileArray = [...employee_info.mobile];

console.log("Employee Address is:", ...addressArray);
console.log("Employee Mobile Numbers is:", ...mobileArray);

// //step 5
console.log('======================Step 6=========================');
const employeeClone = JSON.parse(JSON.stringify(employee_info));

console.log(`Salary Before Update => ${employeeClone.salary.july_month}`);
employeeClone.salary.july_month= "80,000INR"
console.log(`Salary After Update => ${employeeClone.salary.july_month}`);
console.log(`Country Before Update => ${employeeClone.address.country}`);
employeeClone.address.country="United Kingdom";
console.log(`Country After Update => ${employeeClone.address.country}`);




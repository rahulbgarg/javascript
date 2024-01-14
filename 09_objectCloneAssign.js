console.log(`-----------------Step 1----------------------- \n`);

const bankSbi={
    
    bankName: "State Bank Of India",
    branchCode: "SBIN00096237",
    branchHead: "Mr. Aditya Kapoor",
    bankNumber: 12,
}
console.log(bankSbi);
console.log(`-----------------Step 2----------------------- \n`);
const bankLocation={

    street:"Lane 2",
    city: "Dhule",
    pin: 424001

}
console.log(bankLocation);

console.log(`-----------------Step 3----------------------- \n`);
console.log(`After Cloning Step 1 and Step 2:`);
const clone = Object.assign({},bankSbi);
console.log(`Original Object==>`, bankSbi );
console.log(`Cloned Object==>`, clone);

const clone1 = Object.assign({},bankLocation);
console.log(`Original Object==>`, bankLocation );
console.log(`Cloned Object==>`, clone1);

console.log(`-----------------Step 4----------------------- \n`);
const rateOfInterest={
homeLoanInterest:"8.4%",
personalLoanInterest:"12%",
dueInterest:"5%"
}
console.log(`New Object==> `, rateOfInterest);

console.log(`-----------------Step 5----------------------- \n`);
console.log(`All Object in one new object named SbiDetails`);
const sbiDetails=Object.assign(bankSbi,bankLocation,rateOfInterest)
console.log(`New Object is==>`, sbiDetails);

console.log(`-----------------Step 6----------------------- \n`);
console.log(`Travesing`);
for (const key in sbiDetails) {
    const element= sbiDetails[key];
   console.log(`Key==>${key} ,Value==> ${element}`);
}

console.log(`-----------------END----------------------- \n`);
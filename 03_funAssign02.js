function bankDetails(bankName, accountNum, location, pinCode) {
    console.log("Bank Name is:  ",bankName);
    console.log("Account Number is: ",accountNum);
    console.log("Bank Location: ",location);
    console.log("Its Pincode: ",pinCode ,'\n');
  }
  
  // Calling the function
  bankDetails("CITI Bank", "33567678345", "Pune", 411045); 
  bankDetails("AXIS Bank", "45465778344", "Mumbai", 414232);  
  bankDetails("HDFC Bank", "78966678345", "Pune", 411045, "open");  
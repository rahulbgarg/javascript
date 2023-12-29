console.log("***************** Step I *******************");

function noarg() {
    console.log("Function with no argument");
    var result  ;
    return result;
  }
  var returnValue = noarg();
 console.log("Function with no Return Type And its Value:", returnValue);

 console.log("***************** Step II *******************");

 function personalDetails(firstName, lastName, collegeName) {
    console.log("First Name: ",firstName);
    console.log("Last Name: ",lastName);
    console.log("College Name: ",collegeName);
  }
  
  // Calling the function
  personalDetails("Rahul", "Garg", "Pune University");
  
 console.log("***************** Step III *******************");

 function swapValues(Virat, Anushka){
    console.log("Before Swap:", "Virat->", Virat, " Anushka->", Anushka);
    var temp = Virat;
    Virat = Anushka;
    Anushka = temp;
    console.log("After Swap:", "Virat->", Virat, " Anushka->", Anushka);
 }
 swapValues(1000, 2000);
 console.log("***************** Step IV *******************");

 function addThreeValues(n1,n2,n3){
    console.log("The data for addition is :", n1, n2, n3);
    var addition = n1+n2+n3;
    console.log("The Result is:", addition);
 }
 addThreeValues(10.23, 600, 40);
 addThreeValues("Hello", "Good", "Morning");


console.log("-------------------STEP 1-------------------");

var maleMarriageEligibilty = function(gender, age, boyName){
  var result=  gender =="Male" && age>21 ? `Hey ${boyName} you are eligible for Marriage`:`Unfortunately you are not Eligible` ;
  console.log(result);
}
maleMarriageEligibilty("Male", 25,"BillGates")
maleMarriageEligibilty("Male", 17,"SteveJobs")

console.log("-------------------STEP 2-------------------");
var femaleMarriageEligibilty = function(gender, age, girlName){
    var feResult=  gender =="Female" && age>18 ? `Hey ${girlName} you are eligible for Marriage`:`Unfortunately you are not Eligible` ;
    console.log(feResult);
  }
  femaleMarriageEligibilty("Female", 15,"Jennifer")
  femaleMarriageEligibilty("Female", 27,"Malinda Gates")
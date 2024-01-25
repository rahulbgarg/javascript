console.log(`==========================================STEP I===================================================`);
class Vehicle{
    constructor(company,vehicle,number,color,seater){
this.company=company;
this.vehicle=vehicle;
this.number=number;
this.color=color;
this.seater=seater;
    }
    vehicleDetails(){
        console.log(`Vehicle Company is ==>${this.company}, Vehicle Type is ==> ${this.vehicle}, Vehicle Number is ==>${this.number}, Vehicle Color is ==> ${this.color}, Capacity is ==> ${this.seater}`);
    
    }
}
const ertiga = new Vehicle("Tata","SUV","MH20AV1223","Red",6)
const truck = new Vehicle("Ashok","Truck","MH40V1345","Brown",2)
const volvo = new Vehicle("Volvo","Bus","GJ12ZZ9293","Blue",40)
const bike = new Vehicle("TVS","Bike","MH18AA2223","Black",2)
const audi = new Vehicle("Audi","Car","MP40SS9999","White",4)

console.log(`Traversing of Vehicle using Array :`);
const arrayOfVehicle = [ertiga,truck,volvo,bike,audi]
for (const iterator of arrayOfVehicle) {
    console.log(iterator);
}

// Seperate log using vehicleDetails method
// ertiga.vehicleDetails();
// truck.vehicleDetails();
// bike.vehicleDetails();
// volvo.vehicleDetails();
// audi.vehicleDetails();

console.log(`==========================================STEP II===================================================`);

class College{
    constructor(name,location,faculty,university,ctype){
    this.name=name;
    this.location=location;
    this.faculty=faculty;
    this.university=university;
    this.ctype=ctype;
}
collegeDetails(){
    console.log(`College Name ==>${this.name}, Location ==>${this.location}, Faculty No. ==>${this.faculty}, University ==>${this.university}, College Stream ==> ${this.ctype}`);

}
}
const skn = new College("SKNCOE","Vadgoan(PUNE)",45,"SPPU","Engineering")
const mit = new College("MIT-WPU","Kothrud(PUNE)",55,"WPU","Engineering")
const kkwg = new College("K.K.Wagh COE","College Road(Nashik)",40,"SPPU","Engineering")
const nid = new College("NID","Gandhinagar(Ahmedabad)",25,"Central","Art")

skn.collegeDetails()
mit.collegeDetails()
kkwg.collegeDetails()
nid.collegeDetails()

console.log(`==========================================STEP III===================================================`);

let traverseObject=function (Object) {
    for (const key in Object) {
        const element = Object[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
    console.log('');
}
traverseObject(skn);
traverseObject(audi);
traverseObject(nid);
traverseObject(volvo);
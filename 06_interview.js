var interview = function(gradScore, hscScore, sscScore, candidateName){
if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
    console.log(`Congrats "${candidateName}" you are eligible`);
} else {
    console.log(`Unfortunately: "${candidateName}" You are not eligible`);
}

}
interview(80,86,90,"Rahul")
interview(70,65,55,"Bill")
interview(60,79,88,"Chris")
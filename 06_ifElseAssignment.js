var marriage = function (gender, age) {
  if (gender === "Male" && age >= 21) {
    console.log(`${gender} is Eligible because his age is : ${age}`);
  } else if (gender === "Female" && age >= 18) {
    console.log(`${gender} is Eligible because her age is : ${age}`);
  } else if (gender === "Other" && age >= 18) {
    console.log(`${gender} is Eligible because their age is : ${age}`);
  } else {
    console.log(`${gender}==>Not Eligible due to age ==>${age}`);
  }
};

// Test cases
marriage("Male", 17);
marriage("Male", 25);
marriage("Female", 28);
marriage("Female", 16); // Eligible
marriage("Other", 35);
marriage("Other", 41);

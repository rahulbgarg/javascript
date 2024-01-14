// 1. Create an object with the name 'professor'
const professor = {
    name: 'John Doe',
    age: 40,
    expertise: 'Computer Science',
    university: 'XYZ University',
    teaching: 'Web Development',
  };
  
  // 2. Include a nested object 'degrees'
  professor.degrees = {
    engineering: 'CSC',
    PHD: 'Adv Computing',
    masters: 'Computer Science',
  };
  
  // 3. Add an array 'certificates'
  professor.certificates = [
    'Hacker Rank Participation',
    'Certificate in IFE course',
    'Certificate in Adv Programming',
  ];
  
  // 4. Add a new property 'totalExperience'
  professor.totalExperience = '14 years';
  
  // 5. Modify an existing property
  professor.age = 41;
  
  // 6. Add a new certificate to the array
  professor.certificates.splice(1, 0, 'Oracle Certified');
  
  // 7. Log the last element of the array 'certificates'
  console.log(professor.certificates[professor.certificates.length - 1]);
  
  // 8. Log the complete object on the console
  console.log(professor);
  
  // 9. Traverse array 'certificates' using for-of loop
  console.log("Certificates:");
  for (const certificate of professor.certificates) {
    console.log(certificate);
  }
  
// let fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "WaterMelon"];
// console.log(fruits_seasonal);

// console.log(`=============== Step I =============`);
// console.log(`First Element In Array: ${fruits_seasonal[0]} , And Last Element In Array: ${fruits_seasonal[fruits_seasonal.length-1]}`);

// console.log(`=============== Step II =============`);

// console.log("Before Adding the element:" , fruits_seasonal);
// let fruits_updated = ["Papaya", ...fruits_seasonal];
// console.log("After Adding the element :", fruits_updated);

// console.log(`=============== Step III =============`);
// console.log("Before Deleting Mango:", fruits_seasonal);
// let originalArray = fruits_seasonal.slice();
// let indexToDelete = fruits_seasonal.indexOf("Mango");
// if (indexToDelete !== -1) {
//     let editedArray = fruits_seasonal.slice(0, indexToDelete).concat(fruits_seasonal.slice(indexToDelete + 1));
//     console.log("Edited Array:", editedArray);
// } else {
//     console.log("Mango not found in the array.");
// }

// console.log(`=============== Step IV =============`);

// console.log("Before Adding Mango:" , fruits_seasonal);
// fruits_seasonal.push("Pineapple");
// console.log("After Deleting Mango:", fruits_seasonal);

// console.log(`=============== Step V =============`);
// console.log("Before Inserting Dragon Fruit:", fruits_seasonal);

// // let indexToInsertBefore = fruits_seasonal.indexOf("WaterMelon");

// // if (indexToInsertBefore !== -1) {
// //     // Use splice to insert "Dragon Fruit" before "WaterMelon"
// //     fruits_seasonal.splice(indexToInsertBefore, 0, "Dragon Fruit");

// //     // Display the original and modified arrays
// //     console.log("Original Array:", fruits_seasonal);
// // } else {
// //     console.log("WaterMelon not found in the array.");
// // }
// fruits_seasonal.splice(4,0,`Dragon Fruit`);
// console.log(fruits_seasonal);

const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`=============== ARRAY =============`);
// 1. Log the first and last element on console
console.log("Original Array:", fruits_seasonal);
console.log(`=============== Step I =============`);
console.log("First Element:", fruits_seasonal[0]);
console.log("Last Element:", fruits_seasonal[fruits_seasonal.length - 1]);

console.log(`=============== Step II =============`);
// 2. Add element → Papaya before the element 'Banana' and then log array on console
let newArray2 = [...fruits_seasonal];
newArray2.splice(newArray2.indexOf("Banana"), 0, "Papaya");
console.log("Original Array:", fruits_seasonal);
console.log("After Adding Papaya:", newArray2);
console.log(`=============== Step III =============`);

// 3. Remove 'Mango' from the array
let newArray3 = [...fruits_seasonal];
newArray3.splice(newArray3.indexOf("Mango"), 1);
console.log("Original Array:", fruits_seasonal);
console.log("After Removing Mango:", newArray3);
console.log(`=============== Step IV =============`);

// 4. Add element or insert an element 'Pineapple' at the last position
let newArray4 = [...fruits_seasonal];
newArray4.push("Pineapple");
console.log("Original Array:", fruits_seasonal);
console.log("After Adding Pineapple:", newArray4);
console.log(`=============== Step V =============`);

// 5. Insert an element - 'Dragon Fruit' before "Water Melon"
let newArray5 = [...fruits_seasonal];
newArray5.splice(newArray5.indexOf("Water Melon"), 0, "Dragon Fruit");
console.log("Original Array:", fruits_seasonal);
console.log("After Inserting Dragon Fruit:", newArray5);
console.log(`=============== Step VI =============`);

// 6. Replace an element 'Orange' with 'Kiwi'
let newArray6 = [...fruits_seasonal];
newArray6[newArray6.indexOf("Orange")] = "Kiwi";
console.log("Original Array:", fruits_seasonal);
console.log("After Replacing Orange with Kiwi:", newArray6);
console.log(`=============== Step VII =============`);

// 7. Log the elements starting from index 1 to 4
let newArray7 = [...fruits_seasonal];
let slicedArray7 = newArray7.slice(1, 5);
console.log("Original Array:", fruits_seasonal);
console.log("Elements from Index 1 to 4:", slicedArray7);
console.log(`=============== Step VIII =============`);

// 8. Only select last 3 element and log on console: Use the length property
let newArray8 = [...fruits_seasonal];
let slicedArray8 = newArray8.slice(-3);
console.log("Original Array:", fruits_seasonal);
console.log("Last 3 Elements:", slicedArray8);
console.log(`=============== END =============`);

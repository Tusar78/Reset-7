/**
 * Problem: Write a program to calculate the average marks of 
 * Mathematics, 
 * Biology, 
 * Chemistry, 
 * Physics, and 
 * Bengali of a student
 */


// One student have some subject marks are
const math = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bengali = 99.50;

// Get Average
const average = ((math + biology + chemistry + physics + bengali) / 5).toFixed(2);

// It should be number
const result = parseFloat(average);
console.log(result) ;

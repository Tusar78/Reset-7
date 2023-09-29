/**
 * Problem 01 : You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else
 * Problem 02 : You are given a triangle with the sides 9,8,9. Write a program to check whether a triangle is isosceles or not using if-else
 * Here Isosceles Means = two sides are equal
 */


// Problem 01
const num1 = 13;
const num2 = 79;
const num3 = 45;

console.log(`Your Numbers are : ${num1}, ${num2}, ${num3}`);

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is greater`);
} else if (num2 > num3 && num2 > num1) {
  console.log(`${num2} is greater`);
} else {
  console.log(`${num3} is greater`);
}

// Problem 02
const slide1 = 9;
const slide2 = 4;
const slide3 = 90;

if (slide1 == slide2 || slide1 == slide3) {
  console.log(`This is isosceles`);
} else {
  console.log(`This is not isosceles`);
}
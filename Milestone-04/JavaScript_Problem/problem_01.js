/**
 * Problem: Harry's mom gave him money and asked him to buy some oranges and apples. Write a program to help harry calculate how much money the shopkeeper will return.
*/

// Harry's mother gave him 1000tk
const money = 1000;

// Buy some oranges and apples
const oneKgOranges = 500;
const oneKgApples = 200;

// Total Fruits 
const sumOfFruits = oneKgApples + oneKgOranges;

// Give back from shopkeeper.
const cashRightNow = money - sumOfFruits;


console.log(cashRightNow);


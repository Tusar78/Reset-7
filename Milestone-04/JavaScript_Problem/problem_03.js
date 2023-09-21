/**
 * Problem: Given an array
 * fruits = ['Apple', 'Banana', 'Orange'];
 * Q1: Find the index of 'Banana' and replace 'Banana' with 'Mango'.
 * Q2: Remove 'Orange' and add 'Watermelon' * 
 */

const fruits = ['Apple', 'Banana', 'Orange'];

const indexOfBanana = fruits.indexOf('Banana');

// Replace 'Banana' with 'Mango'.
fruits[indexOfBanana] = 'Mango';

// Remove Last element Orange
fruits.pop();

// Add Watermelon as a last item
fruits.push('Watermelon');

// Now let's what's condition about array
console.log(fruits);


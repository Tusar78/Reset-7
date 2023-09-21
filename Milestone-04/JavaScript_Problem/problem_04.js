/**
 * Problem: You and your friends Tom, Jane, Peter and John got their final exam results.
 * Your Total score is 85,
 * Tom's Total score is 66,
 * Jane's Total score is 95,
 * Peter's Total score is 56,
 * John's Total score is 40,
 * 
 * 80 or above A grade
 * 60 or above B grade
 * 50 or above C grade
 * 40 or above D grade
 * 39 or less  F grade
 */

// So, let's try to first get grade
const score = 39;

if(score >= 80) {
  console.log("You get 'A' grade!");
} else if(score >= 60) {
  console.log("You get 'B' grade!");
} else if(score >= 50) {
  console.log("You get 'C' grade!");
} else if(score >= 40) {
  console.log("You get 'D' grade!");
} else {
  console.log("You get 'F' grade!");
}
// const addColor = document.querySelector(".myBtn");
// addColor.addEventListener("click", () => {
//   document.body.style.backgroundColor = "lightgreen";
// });

// setTimeout(() => {
//   document.body.style.backgroundColor = "";
// }, 3000);


// const box = document.querySelector(".box");

// if (box.children) {
//   console.log('Hello');
// } else {
//   console.log('world');
// }

// const myTable = document.getElementById("myTable");

// // const cell = myTable.children[0].children;

// // for (let i = 0; i < cell.length; i++) {
// //     for (let j = 0; j <= i; j++) {
// //         console.log(cell[i].children[i]);
// //         cell[i].children[i].style.backgroundColor = 'red';
// //         cell[i].children[i].style.color = 'white';
// //     }
// // }

// // Another way
// const row = myTable.rows;
// for (let i = 0; i < row.length; i++) {
//     row[i].cells[i].style.backgroundColor = 'red'
// }

// const element = document.querySelectorAll('ul > li:last-child');
// for (const elem of element) {
//     console.log(elem.innerText);
// }

// document.getElementsByTagNameNS()

// How to find?…

// The table with id="age-table".
const ageTable = document.getElementById('age-table');
console.log(ageTable);
// All label elements inside that table (there should be 3 of them).
const allOfLavel = ageTable.querySelectorAll('label');
console.log(allOfLavel);
// The first td in that table (with the word “Age”).
const ageList = document.getElementById('age-list');
const firstAge = ageTable.rows[0].cells[0]
console.log(firstAge);
// The form with name="search".
const nameSearch = document.getElementsByName('search');
console.log(nameSearch);
// The first input in that form.
// The last input in that form.
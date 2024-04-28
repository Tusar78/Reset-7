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
// const ageTable = document.getElementById('age-table');
// console.log(ageTable);
// // All label elements inside that table (there should be 3 of them).
// const allOfLavel = ageTable.querySelectorAll('label');
// console.log(allOfLavel);
// // The first td in that table (with the word “Age”).
// const ageList = document.getElementById('age-list');
// const firstAge = ageTable.rows[0].cells[0]
// console.log(firstAge);
// // The form with name="search".
// const nameSearch = document.getElementsByName('search');
// console.log(nameSearch);
// The first input in that form.
// The last input in that form.

// document.body.person = {
//   name: "Tusar",
//   role: "Web Developer",
// };

// Element.prototype.myCount = function () {
//   let count = 0;
//   for (let i = 0; i < this.children.length; i++) {
//     count++;
//   }

//   return count;
// };

// const box = document.getElementsByClassName("box")[0];
// box.myCount = function() {
//     let count = 0;
//     for (let i = 0; i < this.children.length; i++) {
//         count++;
//     }

//     return count;
// }
// console.log(box.myCount());

// const elem = document.getElementById('elem');

// console.log(elem.getAttribute('about'));
// console.log(elem.setAttribute('name', 'Tusar'));
// console.log(elem.outerHTML);

// for (const attr of elem.attributes) {
//     console.log(`${attr.name} = ${attr.value}`);
// }

// const chkbox = document.querySelector('input[type="checkbox"]');

// if (chkbox.checked) {
//     console.log('Yesss');
// } else {
//     console.log('Noo');
// }

// const myLink = document.getElementById('a');

// console.log(myLink.getAttribute('href'));

// let user = {
//   name: "Tusar",
//   age: 25,
// };

// for (const div of document.querySelectorAll("[show-info]")) {
//   let field = div.getAttribute('show-info');
//   div.innerHTML = user[field]
// }

// const elem = document.querySelector('[data-widget-name]');

// const links = document.querySelectorAll('a');

// for (const link of links) {
//   let href = link.getAttribute('href');
//   if (!href) continue;
//   if (!href.includes('://')) continue;
//   if (href.startsWith("http://internal.com")) continue;
//   link.style.color = 'orange'
// }

// Another way
// let selector = `a[href*='://']:not([href^='http://internal.com'])`;
// let links = document.querySelectorAll(selector);
// links.forEach(link => link.style.color = 'orange')


const div = document.createElement('div');
div.innerHTML = `<strong>Hi there!</strong> You've read an important message`;
div.className = 'alert';

// const names = document.getElementById('names');
// let li1 = document.createElement('li');
// li1.innerHTML = 'Tonmoy';
// names.prepend(li1);

// let li2 = document.createElement('li');
// li2.innerHTML = 'Aopo';
// names.append(li2);

// names.before("Boro vai");
// names.after("Soto vai");

// document.body.append(div);
// setTimeout(() => div.remove(), 3000)

// document.body.append(div);
// let div2 = div.cloneNode(true);
// div2.querySelector('strong').innerHTML = 'By there';
// div.after(div2)

// const elem = document.getElementById('elem');

// function clear(elem) {
//     elem.remove();
//     return elem;
// }

// setTimeout(function(){
//     return clear(elem)
// }, 3000)

// const myTable = document.getElementById('table');
// console.log(myTable.previousSibling.remove());
// myTable.remove();
const addColor = document.querySelector(".myBtn");
addColor.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightgreen";
});

setTimeout(() => {
  document.body.style.backgroundColor = "";
}, 3000);


const box = document.querySelector(".box");

if (box.children) {
  console.log('Hello');
} else {
  console.log('world');
}

const myTable = document.getElementById("myTable");

// const cell = myTable.children[0].children;

// for (let i = 0; i < cell.length; i++) {
//     for (let j = 0; j <= i; j++) {
//         console.log(cell[i].children[i]);
//         cell[i].children[i].style.backgroundColor = 'red';
//         cell[i].children[i].style.color = 'white';
//     }
// }

// Another way
const row = myTable.rows;
for (let i = 0; i < row.length; i++) {
    row[i].cells[i].style.backgroundColor = 'red'
}
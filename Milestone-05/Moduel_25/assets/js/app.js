// Option 02
// const makeRed = () => {
//     document.body.style.backgroundColor = 'red';
// }

// const makeYellow = document.querySelector('.make-yellow');
// const makePurple = document.querySelector('.make-purple');
// const makeGolden = document.querySelector('.make-golden');

// // Option 03
// makeYellow.onclick = function() {
//     document.body.style.backgroundColor = 'yellow';
// }

// // Option 04
// makePurple.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'purple';
// })

// // Option 05
// document.querySelector('.make-golden').addEventListener('click',  function () {
//     document.body.style.backgroundColor = 'goldenrod';
// })

const input = document.querySelector('input[id=name]');
const printName = document.getElementById('printName');
const displayName = document.querySelector('.display-name');

printName.addEventListener('click', () => {
    let inputVal = input.value;
    displayName.textContent = inputVal;
})

input.addEventListener('keyup', (e) => {
    let inputVal = e.target.value;
    displayName.textContent = inputVal;
})
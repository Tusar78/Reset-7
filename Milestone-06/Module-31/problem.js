// Problem 01
const oddArray = [1, 3, 5, 7, 9];
const evenArray = oddArray.map((elem) => elem + 1);
console.log(evenArray);

// Problem 02
const randomArr = [33, 50, 79, 78, 90, 101, 30];
const diviseableTen = randomArr.filter((elem) => elem % 10 === 0);
console.log(diviseableTen);
// same task using find
const diviseableTen2 = randomArr.find((elem) => elem % 10 === 0);
console.log(diviseableTen2);

// Problem 03
const instructor = [
  { name: "Aopo", age: 23, position: "Senior" },
  { name: "Jannat", age: 22, position: "Junior" },
  { name: "Salman", age: 23, position: "Senior" },
];

const seniors = instructor.filter(elem => elem.position === 'Senior');
console.log(seniors);

// for(let i = 1; i < 39; i++) {
//   console.log('Ajke Amar Mon Valo Na!', i);
// }

// for (let i = 58; i <= 98; i++) {
//   console.log(i);  
// }

// Even Number between 412 to 456
// let i = 412;
// while (i <= 456) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 581; i <= 623; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// while (condition) {
  
// }

// const topics = ['DataType', 'Variable', 'Array', 'Function', 'Objects', 'For OF', 'String', 'Scope', 'Hoisting'];

// let i = 0;
// while (i < topics.length) {
//   console.log(topics[i]);
//   i++;
// }

// let i = 30;
// while (i <= 86) {
//   if (i > 50) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

const books = {
  Js: 200,
  python: 250,
  php: 150,
  c: 180,
  cPlus: 290
}

let entry = Object.entries(books);

let bookUnder2 = [];

for (let i = 0; i < entry.length; i++) {
  if (entry[i][1] < 200) {
    bookUnder2.push(entry[i][0]);
  }
}

console.log(bookUnder2);
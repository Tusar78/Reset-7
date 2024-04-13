// const country = "Bangladesh";
// const age = 52;
// const isIndependent = true;
// const student = { id: 121, class: 11, name: "Agun" };
// const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isIndependent);
// console.log(typeof student);
// console.log(typeof friends);
// console.log(typeof add);

// const newFriends = friends.slice(2, 3);
// console.log(newFriends);
// console.log(friends);
// const newf = friends.splice(2, 4);
// console.log(newf);
// console.log(friends);

// const names = ['Tusar', 'Tusar', 'Rakib', 'Sharif', 'Sanjid', 'Yasin', 'Tusar', 'Sanjid', 'Sharif'];

// Using of Include
// function duplicateRemove(names) {
//     const uniqueArray = [];
//     for (let i = 0; i < names.length; i++) {
//         if (!uniqueArray.includes(names[i])) {
//             uniqueArray.push(names[i]);
//         }
//     }
//     return {uniqueArray}
// }

// const {uniqueArray} = duplicateRemove(names);
// console.log(uniqueArray);

// Using indexof
// function duplicateRemove(names) {
//     const uniqueArray = [];
//     for (let i = 0; i < names.length; i++) {
//         if (uniqueArray.indexOf(names[i]) === -1) {
//             uniqueArray.push(names[i])
//         }
//     }
//     return {uniqueArray}
// }

// const {uniqueArray} = duplicateRemove(names);
// console.log(uniqueArray);

// const names = ['Tusar', 'Tusar', 'Rakib', 'Sharif', 'Sanjid', 'Yasin', 'Tusar', 'Sanjid', 'Sharif'];

// // Using For Loop
// function duplicateRemove(names) {
//     const uniqueArray = [];
//     for (let i = 0; i < names.length; i++) {
//         let isDuplicate = false;
//         for (let j = 0; j < i; j++) {
//             if (names[i] === names[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         if (!isDuplicate) {
//             uniqueArray.push(names[i])
//         }
//     }
//     return {uniqueArray}
// }

// const {uniqueArray} = duplicateRemove(names);
// console.log(uniqueArray);

// For bar problem
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(`${i} = Foo`);
//     }
//     if (i % 5 === 0) {
//         console.log(`${i} = Bar`);
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} = FooBar`);
//     }
// }

// const woodRequired = (tableQ, chairQ, bedQ) => {
//   const perTable = 2;
//   const perChair = 1;
//   const perBed = 20;

//   const tableW = tableQ * perTable;
//   const chairW = chairQ * perChair;
//   const bedW = bedQ * perBed;

//   const totalWood = tableW + chairW + bedW;

//   return { totalWood };
// };

// const {totalWood} = woodRequired(4, 7, 2);
// console.log(totalWood);

let phones = [
  {
    name: "oppo",
    camera: "20",
    sotorage: "64gb",
    price: 20000,
    color: "black",
  },
  {
    name: "Samsung",
    camera: "30",
    sotorage: "64gb",
    price: 4000,
    color: "silver",
  },
  {
    name: "Apple",
    camera: "12",
    sotorage: "128gb",
    price: 156000,
    color: "pink",
  },
  {
    name: "Xiaomi",
    camera: "50",
    sotorage: "256gb",
    price: 30000,
    color: "gray",
  },
  {
    name: "Sony",
    camera: "18",
    sotorage: "64gb",
    price: 80000,
    color: "blue",
  },
  {
    name: "Pixel",
    camera: "40",
    sotorage: "128gb",
    price: 110000,
    color: "skyBlue",
  },
  {
    name: "Itel",
    camera: "106",
    sotorage: "256gb",
    price: 26000,
    color: "orange",
  },
];

// const chipestPhones = (phones) => {
//   let chipestPhone = phones[0];
//   for (let i = 0; i < phones.length; i++) {
//     if (chipestPhone.price > phones[i].price) {
//       chipestPhone = phones[i];
//     }
//   }

//   return { chipestPhone };
// };

// const { chipestPhone } = chipestPhones(phones);
// console.log(chipestPhone);

// const chipestPhones = (phones) => {
//     let chipestPhone = phones.filter(arr => arr.price < 10000)
  
//     return { chipestPhone };
//   };
  
//   const { chipestPhone } = chipestPhones(phones);
//   console.log(chipestPhone);


// const products = [
//     {productName: 'Shirt', price: 740, quantity: 3},
//     {productName: 'Shoe', price: 1780, quantity: 1},
//     {productName: 'T-Shirt', price: 740, quantity: 1},
//     {productName: 'Panjabi', price: 3460, quantity: 1},
//     {productName: 'Dress', price: 2000, quantity: 1},
// ]

// const totalPrices = products => {
//     let qWisePrice = []
//     let totalPrice = 0;
//     for (let i = 0; i < products.length; i++) {
//         qWisePrice[i] = `${products[i].productName} = ${products[i].price * products[i].quantity}`;
//         let qp = products[i].price * products[i].quantity;
//         totalPrice += qp;
//     }

//     return {totalPrice, qWisePrice}
// }

// const {totalPrice, qWisePrice} = totalPrices(products)
// console.log(qWisePrice);
// console.log(totalPrice);
// class Teachers {
//     constructor(name, sub) {
//         this.name = name;
//         this.sub = sub;
//     }

//     dept() {
//         console.log(`I Love this ${this.sub}`);
//     }
// }

// class subTeacher extends Teachers {
//     constructor(name, sub, age) {
//         super(name, sub);
//         this.name = name;
//         this.sub = sub;
//         this.age = age;
//     }
// }

// const tusar = new subTeacher("Tusar", "Web Development", 24);
// console.log(tusar);
// tusar.dept();


// const person = {
//     name : "tusar",
//     age: 23,
//     3: 'Rakib'
// }

// const my = 'name';
// console.log(person[my]);

// Practice task

// const data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary: [
//                     {school_name: "ABC primary school"},
//                     {location: "Peters Burg"},
//                 ]
//             },
//             {
//                 secondary: [
//                     {school_name: "ABC secondary school"},
//                     {location: "St Lorence"},
//                 ]
//             }
//         ]
//     }
// }

// // Get Secondary School Loaction
// const secondSchool = data?.Sophia?.study[1]?.secondary[1]?.location;
// console.log(secondSchool);

const arr = [10, 20, 30];
// console.log(arr, arr.length);
// arr.length = 0;
// console.log(arr);
arr.forEach(elem => console.log(elem * elem))
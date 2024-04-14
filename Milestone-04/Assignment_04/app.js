/**
 * ত োমাকে cubeNumber() নামে একটা function দে ওয়া হয়ে ছে । functionটা একটা input নাম্বার নি বে ।
Task:
1. input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থে কে ।
2. Bonus: ইনপুট হি সে বে number টাইপ এর পরি বর্তে অন্য কি ছুদি লে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন
করে দি বে ফাংশন থে কে ।
 */

// function cubeNumber(number) {
//     let result;
//     if (typeof number !== 'number' || number < 1) {
//         result = 'Please Enter the valid number!';
//     } else {
//         result = number * number * number;
//     }

//     return result;
// }

// const result1 = cubeNumber(5)
// const result2 = cubeNumber(4)
// console.log(result1);
// console.log(result2);

// /**
//  * 1. ত োমাকে একটা function দে ওয়া হবে called “matchFinder()” যা ইনপুট হি সে বে দইুটা string নি বে ।
// Task:
// 1. যদি প্রথম স্ট্রি ংটির ক োন ো একটি অংশে র সাথে দ্বি তীয় স্ট্রি ংটির পুর োপুরি মি ল খুজে পাও সে ক্ষে ত্রে তুমি
// boolean রি টার্ন করবে এক্ষে ত্রে ত োমাকে true রি টার্ন করতে হবে ।
// 2. আর যদি পুর োপুরি মি ল খুজে না পাও সে ক্ষে ত্রে তুমি boolean false রি টার্ন করবে ।
// 3. Bonus: দটিু ইনপুট স্ট্রি ং দে ওয়া হল ো কি না সে টা validate করবে । যদি দইুটি বা যে ক োন ো একটি ইনপুট স্ট্রি ং
// না হয় সে ক্ষে ত্রে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন করে দি বে ।
//  */

// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return 'Please Enter String Data!'
//     } else {
//         if (string1.includes(string2)) {
//             return true;
//         } else {
//             return false;
//         }
//     }

// }

// const result = matchFinder('Hello World', 'World');
// console.log(result);

/**
 * Problem - 3
ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
এই array তে সবসময় দইুটি উপাদান থাকবে ।
Task:
1. যদি অ্যারে র দইুটি উপাদান পজি টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থে কে ছ োট ক্রমে সাজি য়ে রি টার্ন
করবে ।
2. যদি দইুটি উপাদান একই হয় সে ক্ষে ত্রে তুমি এই স্ট্রি ং রি টার্ন করবে ঃ “equal”
3. Bonus: যদি অ্যারে র যে ক োন ো একটি উপাদান নে গে টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি রি টার্ন করবে “Invalid
Input”
 * 
 */

// function sortMaker(arr) {
//     for (const ar of arr) {
//         if (ar < 0) {
//             return 'Invalid input'
//         }
//     }

//     const sortArr = arr.sort((a, b) => a - b);
//     return sortArr
// }

// const mySort = sortMaker([120, 44]);
// console.log(mySort);

/**
 * Problem - 4
ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
তি নটি property থাকবে ।
Task:
1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।
2. Bonus: যদি object এর ক োন ো property missing থাকে সে ক্ষে ত্রে সে ই অংশটুকু double underscore
দি য়ে replace হবে । (২য় output এর format এ )
 * 
 */

// function findAddress(obj) {
//   let myObj = {
//     street: "__",
//     house: "__",
//     society: "__",
//   };

//   let address = `${obj.street ? obj.street : myObj.street},${
//     obj.house ? obj.house : myObj.house
//   },${obj.society ? obj.society : myObj.society}`;

//   return address
// }

// const result = findAddress({
//   street: 10,
//   house: "15A",
//   society: "Earth Perfect",
// });
// console.log(result);


/**
 * Problem - 5
তুমি দ োকানে একটা চি প্স কি নতে গে লা কি ছুখুচরা টাকার ন োট নি য়ে । একটা canPay() নামে function বানাও যে টা
২টা ইনপুট নে ইঃ একটা array, এবং আরে কটা number।
1. Array এর প্রত্যে ক টা element ত োমার খুচরা টাকা বঝু াই
1 taka
2 taka
5 taka
2. second input টা বঝু াই চি প্স এর দাম।
Task:
1. যদি খুচরা টাকা গুল ো য োগ করে চি প্স এর দামে র সমান বা তার বে শি হয় তাহলে boolean true রি টার্ন
করবে
2. আর যদি ন োটগুল োর য োগফল চি প্স এর দামে র চে য়ে কম হয় সে ক্ষে ত্রে boolean false রি টার্ন করবে ।
3. Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কি না চে ক করবে । empty অ্যারে হলে মি নি ংফুল মে সে জ
রি টার্ন করে দি বে ।
 */

function canPay(changeArray, totalDue) {
    const productPrice = totalDue;
    let totalMoney = 0;
    for (const taka of changeArray) {
        totalMoney += taka;
    }

    if (totalMoney >= productPrice) {
        return true;
    } else {
        return false;
    }
}

const result = canPay([1, 5, 5], 10);
console.log(result);
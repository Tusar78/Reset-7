/*
    1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
*/

const multiply = (n1, n2, n3) => {
    const mul = n1 * n2 * n3;
    return {mul};
}

const {mul} = multiply(2, 3, 4);
console.log(mul);

// Problem 2
const str1 = "I am a web developer.";
const str2 = "I love to code.";
const str3 = "I love to eat biriany.";
const result = `${str1} ${str2} ${str3}`;
console.log(result);

// problem3
const addFunc = (n1, n2 = 0) => {
    const result1 = n1 + n2;
    return {result1}
}

const {result1} = addFunc(10);
console.log(result1);

// PRoblem 4
const friends = ['Aopo', 'Salman', 'Jannat', 'Asha', 'Sahfin', 'Nadim', 'Emon'];
const frndFunc = arr => {
    const evenArr = [];
    arr.forEach(elem => {
        if (elem.length % 2 !== 0) {
            evenArr.push(elem)
            console.log(elem.length);
        }
    });
    
    return {evenArr};
}

const {evenArr} = frndFunc(friends);
console.log(evenArr);
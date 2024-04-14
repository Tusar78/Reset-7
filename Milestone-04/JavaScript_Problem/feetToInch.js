const feetToInch = feet => {
    let inch;
    inch = feet * 12;
    return {inch};
}

const {inch} = feetToInch(12);
console.log(inch);
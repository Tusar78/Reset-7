const feetToInch = feet => {
    let inch;
    inch = feet * 12;
    return {inch};
}

const {inch} = feetToInch(12);
console.log(inch);

const centimeterToMeter = centimeter => {
    let meter;
    meter = centimeter / 100;
    return {meter}
}

const {meter} = centimeterToMeter(120);
console.log(meter);
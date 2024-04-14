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

const paperRequirements = (book1Q, book2Q, book3Q) => {
    let pBook1 = 100;
    let pBook2 = 200;
    let pBook3 = 300;
    
    let totalB1 = pBook1 * book1Q;
    let totalB2 = pBook2 * book2Q;
    let totalB3 = pBook3 * book3Q;

    let totalPaperNeed = totalB1 + totalB2 + totalB3;

    return {totalPaperNeed}
}

const {totalPaperNeed} = paperRequirements(4, 2, 7);
console.log(totalPaperNeed);

// Find Biggest Lenght name
const friends = ['Tusar', 'Rakib', 'Sharif', 'Yasin', 'Arisha', 'Rochita', 'Jannat'];
const bestFriend = names => {
    let bigLength = '';
    for (const name of names) {
        if(bigLength.length < name.length) {
            bigLength = name;
        }
    }

    return bigLength;
}

const friend = bestFriend(friends);
console.log(friend);
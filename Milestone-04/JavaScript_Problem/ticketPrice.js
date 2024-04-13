/**
 * 1. If ticket number is less than 100, per ticket price 100
 * 2. If ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/tickets rest tickets will be 90 taka per price
 * First 100 ----> 100tk
 * second 100 ----> 90tk
 * Rest 100 ----> 70tk
 */

const ticketCalculator = ticketQuantity => {
    const first100ticket = 100;
    const second100ticket = 90;
    const third100ticket = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100ticket;
        return price;
    } else if(ticketQuantity <= 200) {
        const price = 100 * first100ticket;
        const secondQuantity = ticketQuantity - 100;
        const secondPrice = secondQuantity * second100ticket;
        const secondTotal = price + secondPrice;
        return secondTotal;
    } else {
        const price = 100 * first100ticket;
        const secondPrice = 100 * second100ticket;
        const thirdQuantity = ticketQuantity - 200;
        const thirdPrice = thirdQuantity * third100ticket;
        const thirdTotal = price + secondPrice + thirdPrice;
        return thirdTotal;
    }
}

const price = ticketCalculator(201);
console.log(price);
const isLeapYear = year => {
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    console.log(`%c${year} is leapYear!`, 'background-color: green');
  } else {
    console.log(`%c${year} is not leapYear!`, 'color: red');
  }
}

isLeapYear(2000)
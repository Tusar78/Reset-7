const hourToMinute = hour => {
  const minutes = hour * 60;
  return minutes;
}

const minutes = hourToMinute(2);
console.log(`${minutes} minutes`);
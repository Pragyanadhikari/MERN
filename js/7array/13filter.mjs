let inputArray = [1, 2, 6, 3, 13, 12, 11];

const primeCheck = (value) => {
  let count = 0;
  for (let j = 1; j <= value; j++) {
    if (value % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
};
let outputArray = inputArray.filter((value, i) => {
  if (primeCheck(value) === true) {
    return true;
  } else {
    return false;
  }
});
console.log(outputArray);

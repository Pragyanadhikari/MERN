let inputArray = [1, 2, 6, 3];

let outputArray = inputArray.filter((value, i) => {
  if (value % 2 == 0) {
    return true; //return (value);
  } else {
    return false;
  }
});
console.log(outputArray);

//We can use filter in case:
//[1,3,9]=[1,9]
//[1,3,10]=[1]
//But not in case:[1,3,10]=[1,9]

let inputArray = [1, 3, 10, 11, 12];

let outputArray = inputArray.filter((value, i) => {
  return true; //return (value);
});
console.log(outputArray);

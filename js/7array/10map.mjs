//["my","name","is"]=["My","Name","Is"]
// let input = ["my", "namE", "is"];
// let output = input.map((value, i) => {
//   let ar1 = [];
//   let j = 0;
//   while (j < value.length) {
//     if (j === 0) {
//       ar1[j] = value[j].toUpperCase();
//     } else {
//       ar1[j] = value[j].toLowerCase();
//     }
//     j++;
//   }
//   return ar1.join("");
// });
// console.log(output);

// let output = input.map((value, i) => {
//   let detail = value.split("");
//   detail[0] = detail[0].toUpperCase();
//   detail = detail.join("");
//   return detail;
// });

// console.log(output);
// let output = input.map((value, i) => {
//   let ar1 = [];

//   for(let j=0;j<value.length;j++){

//     if (j === 0) {
//       ar1[j] = value[j].toUpperCase();
//     } else {
//       ar1[j] = value[j].toLowerCase();
//     }
//   }
//   return ar1.join("");
// });
// console.log(output);

let arr1 = ["my", "nAmE", "is"];
const firstLetterCapital = (input) => {
  let inputArr1 = input.split("");
  let inputArr2 = inputArr1.map((value, i) => {
    if (i === 0) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  });

  let output = inputArr2.join("");
  return output;
};
// console.log(firstLetterCapital("praGyaN"))
let arr2 = arr1.map((value, i) => {
  return firstLetterCapital(value);
});
console.log(arr2);

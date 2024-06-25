//["my","name","is"]=["My","Name","Is"]
let input = ["my", "name", "is"];
// let output = input.map((value, i) => {
//   let ar1 = [];
//   let j = 0;
//   while (j < value.length)
//     if (j === 0) {
//       ar1[j] = value[j].toUpperCase();
//       j++;
//     } else {
//       ar1[j] = value[j].toLowerCase();
//       j++;
//     }
//   return ar1.join("");
// });
// console.log(output);

let output = input.map((value, i) => {
  let detail = value.split("");
  detail[0] = detail[0].toUpperCase();
  detail = detail.join("");
  return detail;
});

console.log(output);

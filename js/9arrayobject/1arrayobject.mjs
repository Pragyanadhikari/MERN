let product = [
  {
    name: "laptop",
    price: 100000,
  },
  {
    name: "mobile",
    price: 30000,
  },
  {
    name: "Tv",
    price: 200000,
  },
];

let output = product.map((value, i) => {
  return value.name;
});
let output1 = product.map((value, i) => {
  return value.price;
});
let output2 = product.map((value, i) => {
  return value.price * 2;
});
let output3 = product.map((value, i) => {
  return `${value.name} cost  Nrs: ${value.price}`;
});
let output4 = product.filter((value, i) => {
  if (value.price > 50000) {
    return true;
  }
});
let output5 = output4.map((value, i) => {
  return value.name;
});


//console.log(output); // 'laptop', 'mobile', 'Tv' ]
// console.log(output1); //[ 100000, 30000, 200000 ]
// console.log(output2); //[ 200000, 60000, 400000 ]
// console.log(output3); //[
//     'laptop cost  Nrs: 100000',
//     'mobile cost  Nrs: 30000',
//     'Tv cost  Nrs: 200000'
//   ]
//console.log(output4); //[ { name: 'laptop', price: 100000 }, { name: 'Tv', price: 200000 } ]
console.log(output5)
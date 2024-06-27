// fiboSeries(5)     =[0,1,1,2,3,5]
const fibonacciSeries = (input) => {
  let a = 0;
  let b = 1;
  while (input >= 0) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
    input = input - 1;
  }
};

fibonacciSeries(9);

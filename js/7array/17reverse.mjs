//"My name is Pragyan"=>"yM eman si naygarP"
let input = "My name is Pragyan";

const reverseWord = (value) => {
  return value.split("").reverse().join("");
};

let variable = input.split(" ");
let outputArr1 = variable.map((value, i) => {
  let outputAnswer = reverseWord(value);
  return outputAnswer;
});
let answer = outputArr1.join(" ");
console.log(answer);

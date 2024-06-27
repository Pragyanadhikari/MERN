//make a function that takes a sentence and return the greatest (in lenght ) palindrome string
//"num is beautiful and madam is fabulous but mom is the best"
let inputArr = "num is beautiful and madam is fabulous but mom is the best";
const isPalindrome = (input) => {
  let suppose1 = input;
  if (input === suppose1.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
let j = inputArr.split(" ");
let check = j.filter((value, i) => {
  return isPalindrome(value);
});
let stringLength = check[0].length;
let index = 0;
for (let k = 1; k < check.length; k++) {
  if (stringLength <= check[k].length) {
    stringLength = check[k].length;
    index = k;
  }
}
console.log(check[index]);
// const isPalindrome=(input) =>{
//     let ar1= input.split(“”);
//     let ar2= ar1.reverse().join(“”);
//     if(input === ar2){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// let longestPalindrome = (input)=> {
//     let temp1 = input.split(” “)
//     let temp2 = temp1.filter((word)=> {
//         return isPalindrome(word);
//     });
//     let tempWord = “”;
//     temp2.forEach((word)=>{
//         if(word.length>tempWord.length){
//             tempWord = word;
//         }
//     });
//     return tempWord;
// };
// console.log(longestPalindrome(“my mom is beautiful but i like madam”));

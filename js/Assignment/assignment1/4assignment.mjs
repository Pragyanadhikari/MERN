//make a arrow function named isEven , pass a value, that return true if the given number is even else return false
const isEven=(num1)=>{
    if (num1%2===0){
        return true
    }else{
        return false
    }
};

let result = isEven(10)
console.log(`The number is even. ${result}`)
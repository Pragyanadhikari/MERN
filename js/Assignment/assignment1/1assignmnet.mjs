//make a arrow function named is18 it takes one input,the function must return true if the given age is 18 otherwise return false
const is18=(age)=>{
    if (age === 18){
        return true
    }
    else{
        return false
    }
};

let result=is18(18)
console.log(`The result is ${result}`)
//make a arrow function that takes 3 input as number and return average of given number
const averageFunction=(a=0,b=0,c=0)=>{
    let avg=(a+b+c)/3
    return avg;
};

let average=averageFunction(7,7,9)
console.log(`The average of three num is:${average}`)
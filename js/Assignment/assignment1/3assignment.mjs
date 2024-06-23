//make a arrow function that take a number and return you can enter room only if the enter number is less than 18 else you can not enter
const isEntryValid =(num1)=>{
    if (num1<18){
        return ("You can enter room.")
    }else{
        return("You can not enter room.")
    }
}

let result=isEntryValid(24)
console.log(result)
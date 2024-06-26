//filter positive number
let input=[1,-1,3,4,-6,-7]
let outputArray=input.filter((value)=>{
    if (value>=0){
        return true
    }else{
        return false
    }
})

console.log(outputArray)
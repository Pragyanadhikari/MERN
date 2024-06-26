let input=["P",1,"R","a",2]
let output=input.filter((value,i)=>{
    if (typeof (value)==="string"){
        return true
    }else{
        return false
    }
})
console.log(output)
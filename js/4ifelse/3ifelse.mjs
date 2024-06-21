/*
  age 0 to 18 => underage
  age 19 to 60 =>adult
  age 61 to 150 =>old
  else none  
*/

let age=18

if (age <18 && age >=0){
    console.log("underage")
}else if(age<60 && age >=18){
    console.log("adult")
} else if (age<150 && age>=60){
    console.log("Old")
}else{
    console.log("None")
}
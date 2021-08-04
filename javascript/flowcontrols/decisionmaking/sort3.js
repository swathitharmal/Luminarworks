var num1 = 30
var num2 = 30
var num3 = 200
console.log("Numbers are " + num1 + "," + num2 + " and " + num3)

if((num1>num2) &&(num1>num3)){

    if(num2>num3)
    console.log(num1,num2,num2)
    else
    console.log(num1,num3,num2)
}

else if(num2>num3){

    if(num3>num1)
    console.log(num2,num3,num1)
    else
    console.log(num2,num1,num3)
}

else{

if(num1>num2)
console.log(num3,num1,num2)
else
console.log(num3,num2,num1)
}
   


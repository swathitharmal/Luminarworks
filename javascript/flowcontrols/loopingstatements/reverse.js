var num=121
var num1=num

// while(num!=0){             //123!=0 ,12!=0 ,1!=0 ,
//     let digit=num%10       //123%10=3 ,12%10=2 ,1%10=1
//     console.log(digit)     //3 2 1
//     num=Math.floor(num/10) //123/10=12 ,12/10=1 ,1/10=0
// }



// var res=""
// while(num!=0){             
//     let digit=num%10       
//     res=res+digit
//     num=Math.floor(num/10)
// }
// console.log(res)




var res=0
while(num!=0){             
    let digit=num%10       
    res=res*10+digit   //0*10+3=3 ,3*10+2=32 ,32*10+1=321
    num=Math.floor(num/10)
}
console.log(res)

if(res==num1)
console.log("It is a palindrome")
else
console.log("Not a palindrome")

// console.log(num1==res?"Palindrom":"Not a palindrome")
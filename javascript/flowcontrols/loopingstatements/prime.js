var num=10
flag=0
console.log(num)


for(let i=2;i<num/2;i++){
    if(num%i==0)
    flag++
    break
   
}
console.log(flag==0?"prime":"not prime")
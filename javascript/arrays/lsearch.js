var arr=[10,11,12,13,14,15]

var element=20
flag=0
for(let num of arr){
    if(num==element){
        flag++
        break
    }
}
if(flag==0)
    console.log("element not found");
else
    console.log("element found");


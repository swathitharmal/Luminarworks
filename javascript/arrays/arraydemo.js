// expenses

var exp = [30000, 25000, 26000, 27000, 25000]

for (let val of exp)
    console.log(val)



// total expense
var total_exp = 0
for (let val of exp) {
    total_exp += val
}
console.log("total expense=", total_exp)


// val>25000
for (let val of exp) {
    if (val > 25000)
        console.log(val)

}



// count of val>25000
count = 0
for (let val of exp) {
    if (val > 25000)
        count++
}
console.log(count)



// highest val
var max_exp = 0
for (let val of exp) {
    if (val > max_exp) {
        max_exp = val
    }
}
console.log("highest value=" + max_exp)



// min value
var min_exp = 100000
for (let val of exp) {
    if (val < min_exp) {
        min_exp = val
    }
}
console.log("lowest value=" + min_exp)


var min=exp[0]
for(let val of exp){
    if(val<min)
    min=val
}
console.log(min);


//type1
var arr=[10,11,12,13,14,15]
for(let num of arr)
console.log(typeof(num))
//type2
 
var arr=[10,11,12,13,14,15]
console.log(typeof(arr));
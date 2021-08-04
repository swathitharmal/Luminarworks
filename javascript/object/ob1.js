var exp = { jan: 10000, feb: 15000, march: 22000, april: 23000, may: 20000 }

console.log(exp.march)

console.log(exp["march"])

console.log(exp["may"])


//adding new key:value
exp.june = 25000
console.log(exp)
exp["june"] = 25000
console.log(exp)

exp.march += 3000
console.log(exp)

console.log("july" in exp)


// if("july" in exp){

// }
// else{
//     exp.july=24000
// }
// console.log(exp);



if (!("july" in exp)) {
    exp.july = 24000
}
console.log(exp)
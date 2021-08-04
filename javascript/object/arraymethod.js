// function add(num1,num2){
//     return num1+num2
// }


// let add=(num1,num2)=>num1+num2

// let sum=(num1,num2)=>num1-num2

// let cube=num1=>num1**3


// console.log(add(10,20))
// console.log(sum(50,10))
// console.log(cube(3))


// var num_check=num=>num%2==0?"even":"odd"
// console.log(num_check(8));



// var arr = [1, 5, 6, 7, 3, 4]
// // let sq=num=>num**2
// // var squares=arr.map(sq)
// var squares = arr.map(num => num ** 2)
// console.log(squares)

// var cubes = arr.map(num => num ** 3)
// console.log(cubes)


// // FILTER

// var evens = arr.filter(num => num % 2 == 0)
// console.log(evens);


// REDUCE


// var arr = [1, 5, 6, 7, 3, 4]

// var sum=arr.reduce((num1,num2)=>num1+num2)
// console.log(sum)

// var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(max)

// var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
// console.log(min)


// multiple arguments in arrow fuction

// function add(...args){
//     let sum=0
//     for(let num of args){
//         sum+=num
//     }
//     return sum
// }

// console.log(add(1,2,3))

// let add=(...args)=>args.reduce((num1,num2)=>num1+num2)
// console.log(add(10,20,30))


// var search=arr.find(num=>num==100)
// console.log(search)


//foreach

var arr=[10,20,30,40]
arr.forEach(num=>console.log(num))
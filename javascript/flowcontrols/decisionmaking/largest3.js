// largest among 3

var num1 = 1
var num2 = 30
var num3 = 20
console.log("Numbers are " + num1 + "," + num2 + " and " + num3)

if ((num1 > num2) && (num1 > num3))
    console.log(num1)

else if (num2 > num3)
    console.log(num2)

else
    console.log(num3)


// console.log(num1>num2&num1>num3?num1:num2>num3?num2:num3)


// second largest among 3

var num1 = 1
var num2 = 30
var num3 = 200
console.log("Numbers are " + num1 + "," + num2 + " and " + num3)

if ((num1 > num2) && (num1 > num3)) {
    if (num2 > num3)
        console.log(num2)
    else
        console.log(num3)
}

else if (num2 > num3) {
    if (num1 > num3)
        console.log(num1)
    else
        console.log(num3)
}

else {
    if (num1 > num2)
        console.log(num1)
    else
        console.log(num2)
}








var arr = [1, 2, 3, 4]
var element = 6

for (let num1 of arr) {
    for (let num2 of arr) {
        let total = num1 + num2
        if ((element == total) & (num1 != num2)) {
            console.log("pairs are " + num1 + " and " + num2)
        }
    }
}




var arr = [1, 2, 3, 4]
var element = 6

for (let i = 0; i <= arr.length; i++) {
    for (j = i + 1; j <= arr.length; j++) {
        let total = arr[i] + arr[j]
        if (element == total) {
            console.log("pairs are " + arr[i] + " and " + arr[j])
        }

    }
}



var arr = [1, 2, 3, 4]
var low = 0
var upp = arr.length - 1
var element = 6
count=0

while (low<upp) {
    let total = arr[low] + arr[upp]

    if (element == total) {
        console.log(arr[low], arr[upp]);
        low++
    }
    else if (element > total) {
        low++
    }
    else if (element < total){
        upp--
    }
    count++
}
console.log(count);
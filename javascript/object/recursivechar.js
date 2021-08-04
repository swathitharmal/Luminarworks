var pattern = "ABAC"
var dict = {}
for (let char of pattern) {
    if (char in dict) {
        console.log("First recursive char is ", char)
        break
    }
    else {
        dict[char] = 1
    }
}
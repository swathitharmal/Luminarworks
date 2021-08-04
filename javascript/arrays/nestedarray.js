var employees = [
    [1000, "Ajay", "Developer", 20000, 2],
    [1001, "Ram", "Developer", 22000, 2],
    [1002, "Ravi", "QA", 25000, 3],
    [1003, "Raju", "QA", 20000, 1],
    [1004, "Nikil", "Market", 30000, 2]

]


for(let emp of employees) {
        console.log(emp[1])
       
}


for(let emp of employees) {
    console.log(emp[2])
}

for(let emp of employees) {
    if(emp[2]=="Developer"){
        console.log(emp);
    }
}

for(let emp of employees) {
    if(emp[3]<22000){
        console.log(emp);
    }
}
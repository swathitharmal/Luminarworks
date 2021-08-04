// var accounts = {
//     1000: { ac_type: "savings", balance: 5000 },
//     1001: { ac_type: "savings", balance: 6000 },
//     1002: { ac_type: "credit", balance: 3000 }

// }

// console.log(accounts[1000].balance)

// accounts[1003] = { acno: 1003, ac_type: "savings", balance: 3000 }
// console.log(accounts)







var accounts = {
    1000: {
        acno: 1000, ac_type: "savings", balance: 5000, c_transactions: [
            { date: "01/05/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },

    1001: {
        acno: 1001, ac_type: "savings", balance: 6000, c_transactions: [
            { date: "01/05/2021", from: 1000, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]

    },
    1002: {
        acno: 1002, ac_type: "credit", balance: 3000, c_transactions: [
            { date: "01/05/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1000, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]

    }


}
// console.log(accounts[1002].c_transactions)


// accounts[1000].c_transactions.filter(transaction=>transaction.amount>500).forEach(transaction=>console.log(transaction))


// total transaction amount of account number 1000
// var total_credit = accounts[1000].c_transactions.map(transaction => transaction.amount).reduce((amt1, amt2) => amt1 + amt2)
// console.log(total_credit)


// lowest amount
// var low_amt=accounts[1000].c_transactions.map(transaction=>transaction.amount).reduce((amt1,amt2)=>amt1<amt2?amt1:amt2)
// console.log(low_amt)


// credit transaction date of account number 1000
// accounts[1000].c_transactions.forEach(trans=>console.log(trans.date))

// var low_amt=accounts[1000].c_transactions.map(transaction=>transaction.date)
// console.log(low_amt)


// first date of credit transactions of account number 1000
console.log(accounts[1000].c_transactions[0].date)










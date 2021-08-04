// class Bank {
//     createAccount(account_number, name, balance) {
//         this.acc_no = account_number;
//         this.name = name;
//         this.bal = balance;
//     }
//     balanceEnquiry() {
//         console.log("your available balance=" + this.bal);

//     }
//     deposit(amt) {
//         this.bal+=amt
//         console.log(`your account ${this.acc_no} has been credited with amount ${amt} your available balance is ${this.bal}`);
//     }   
//     withdrawal(amt) {

//         if(this.bal<amt){
//             console.log("transaction failed insufficient balance");
//         }
//         else{
//             this.bal-=amt;
//             console.log(`your account ${this.acc_no} has been debited with amount ${amt} your available balance is ${this.bal}`);
//         }
//     }

// }

// var obj=new Bank()
// obj.createAccount(1000,"Ram",2000);
// obj.withdrawal(1000);
// obj.deposit(5000)
// obj.deposit(6000)
// obj.balanceEnquiry()






class Bank {
    status = 0
    

    getAccountDetails() {
        let accounts = {
            1000: { account_number: 1000, name: "ajay", balance: 4000, username: 1000, password: "userone" },
            1001: { account_number: 1001, name: "vjay", balance: 2000, username: 1001, password: "usertwo" },
            1002: { account_number: 1002, name: "ram", balance: 7000, username: 1002, password: "userthree" },
            1003: { account_number: 1003, name: "ravi", balance: 6000, username: 1003, password: "userfour" }
        }
        
        return accounts
    }
    authenticate(uname, pwd) {
        let data = this.getAccountDetails()
        if (uname in data) {
            // console.log("user exist")
            if (uname == data[uname]["username"] & pwd == data[uname]["password"]) {
                // console.log("authentication success")
                this.status=1
                return uname
            }
            else {

                // console.log("incorrect password")
                return -1

            }
        }
        else {

            // console.log("invalid user")
            return 0
        }

    }
    balanceEnquiry(accno){
        if(this.status==1){
        let data=this.getAccountDetails()
        console.log(data[accno]["balance"])
        }
        else{
            console.log("you must login first")
        }
    }
    fundTransfer(user,to_accno,amount){
       let data=this.getAccountDetails()
       if(!(to_accno in data)){
           console.log("invalid to_account number")
       } 
       let balance=data[user]["balance"]
       if(balance<amount){
           console.log("transaction failed,insufficient balance")
       }
       else{
        //    credit
           data[to_accno].balance+=amount

        //    debit
            data[user].balance-=amount

            // console.log(data)


       }
    }

}
var obj = new Bank()
// let user=obj.authenticate(1001,"usertwo")
// obj.balanceEnquiry(user)

let user=obj.authenticate(1000,"userone")
obj.balanceEnquiry(user)
obj.fundTransfer(user,1001,2000)



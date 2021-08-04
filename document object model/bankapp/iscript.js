function createUser() {
    let account_number = acc_no.value
    let password = pwd.value
    let balance = bal.value
    let user = {
        Account_number: account_number,
        Password: password,
        Balance: balance
    }
    localStorage.setItem(account_number, JSON.stringify(user))
    alert("user created")
    location.reload(true)


}
function populate(users) {
    let htmlData = ""
    for (let user of users) {
        htmlData += `<div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">${user.Account_number}</li>
           <li class="list-group-item">${user.Password}</li>
           <li class="list-group-item">${user.Balance}</li>
         </ul>
       </div>`


        //`<p> account_number:${user.Account_number} password:${user.Password}  Balance:${user.Balance} </p>`
    }
    resultarea.innerHTML = htmlData

}
function listAllUsers() {
    let users = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let user = JSON.parse(localStorage.getItem(key))
        users.push(user)
    }
    populate(users)
}


function signin() {
    let uname = username.value
    let pass = password.value
    if (uname in localStorage) {
        let user = JSON.parse(localStorage.getItem(uname))
        console.log(user["Password"])
        console.log(pass)
        if (user.Password === pass) {
            sessionStorage.setItem("user", uname)
            alert("login success")
            window.location.href = "userhome.html"
        }
        else {
            alert("incorrect password")
        }

    }
    else {
        alert("user not found")
    }
}

function displayBalance() {
    let user = sessionStorage.getItem("user")
    let data = JSON.parse(localStorage.getItem(user))
    alert(data.Balance)
    console.log(data)

}

user = sessionStorage.getItem("user")
if (user) {
    profile.innerHTML = `${user}`
}

function logout() {
    sessionStorage.removeItem("user")
    location.href = "login.html"
}

function getUser(acno)
let user=json.parse(localStorage.getItem(acno))
return user


function fundTransfer() {
    alert("inside fund transfer")
    let to_acc = toaccount.value
    let con_acc_no = confirmtoaccount.value
    let amt = amount.value
    if (to_acc in localStorage) {
        let user = sessionStorage.getItem("user")
        // let account = JSON.parse(localStorage.getItem("user"))
        let account=getUser(user)
        if (account.balance < amount) {
            alert("insufficient balance")
        }
        else{
            account.balance-=amount
            let  credit_ac=getUser(to_acc)
            credit_ac.balance+=amount
        }
    }
    else {
        alert("invalid account number")
    }
}
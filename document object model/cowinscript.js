// function checkAge(){
//     let age=document.querySelector("#age").value
//     // alert(age)
//     let html_data=age>18?"Eligible":"Not eligible"
//     document.querySelector("#result").innerHTML=html_data

//     if(age>=18){
//         document.querySelector("#result").style.color="green"
//     }
//     else{
//         document.querySelector("#result").style.color="red"
//     }
   
// }


function checkAge(){
    let age=document.querySelector("#age").value
    // let ag=age.value
    // alert(age)
    let html_data=""

    if(age>=18){
        html_data=`<div style="background-color:seagreen ">Eligible</div>`
        // html_data=`<p style="background-color:seagreen">Eligible</p>`
    }
    else{
        html_data=`<div style="background-color:red">Not Eligible</div>`
        // html_data=`<p style="background-color:seagreen">Eligible</p>`
    }
    result.innerHTML=html_data
   
}
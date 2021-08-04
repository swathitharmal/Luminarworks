// diaplayNumber()

let displayNumber=(num)=>inpt.value+=num


//evaluateExpression()



let evaluateExpression=()=>{
    if(inpt.value==""){
        inpt.value==0
    }
    else{
        try{
            inpt.value=eval(inpt.value)
        }
        catch{
            inpt.value="error"
        }
    }
}


//clearBox()


let clearBox=()=>inpt.value=""


//removeNumber()



let removeNumber=()=>inpt.value=inpt.value.slice(0,-1)

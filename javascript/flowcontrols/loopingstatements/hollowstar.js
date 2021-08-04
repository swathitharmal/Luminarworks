for (let row = 1; row <= 5; row++) {

    let str = ""
    for (let col = 1 ; col <= 9; col++) {
        if((row==5)|(col+row==6)|(col-row==4)){
            str=str+"*"
        }
        else{
            str=str+" "
        }
        
    }
    
    console.log(str)
}



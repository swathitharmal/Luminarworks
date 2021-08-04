// Method overloading
// same method name,different number of parameters, one class

class Calculation{
    add(){
        console.log("inside no arg method")
    }
    add(num1){
        console.log("inside one arg method")
    }
    add(num1,num2){
        console.log("inside two arg method")
    }
    // add(...arg){
    //   console.log("inside 2 arg method");
    // }
}

// only works last implemented work in js ,python
var calc=new Calculation()
calc.add()
calc.add(10)
calc.add(10,20)



// Method overloading

class Parent{
    bike(){
        console.log("Passion pro")
    }
    phone(){
        console.log("Samsung")
    }
}
class Child extends Parenr{
    phone(){
        console.log("Redmi")
    }
    bike(){
        console.log("RE350")
    }
}
var child=new Child()
child.phone()
child.bike()

// same
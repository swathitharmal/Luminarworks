class Person{
    setPerson(Name,Age){

    // 'this' is a keyword used to point current class instance variable
    // setPerson initializing instance variables
    // duty of constuctor is to initializing instance variables
    // constructor name is always same as classname in java and c++. In python it is init

    // in javascript constructor name is always constructor()
    // constructor automatically invoked during object creation


        this.name=Name
        this.age=Age
    }
    printPerson(){
        console.log(this.name,this.age)
    }
}

var obj=new Person()
obj.setPerson("Ajay",27)
obj.printPerson()

var obj1=new Person()
obj1.setPerson("Ram",26)
obj1.printPerson()



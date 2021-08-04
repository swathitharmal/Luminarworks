// class Parent{
//     phone(){
//         console.log("samsungf41")
//     }
// }
// class Child extends Parent{}
// var obj=new Child()
// obj.phone()


class Parent{
    m1(){
        console.log("inside m1 method")
    }
}
class Child extends Parent{
    m2(){
        console.log("inside m2 method")
    }
}
class SubChild extends Child{
    m3(){
        console.log("inside m3 method")
    }
}

var obj=new SubChild()
obj.m3()
obj.m2()
obj.m1()

var obj1=new Child()
obj1.m2()
obj1.m1()

var obj2=new Parent()
obj2.m1()
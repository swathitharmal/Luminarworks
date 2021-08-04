// class Student{
//     setStudent(RollNo,Name,Course,Total){
//         this.roll=RollNo
//         this.name=Name
//         this.course=Course
//         this.total=Total
//     }
//     printStudent(){
//         console.log(this.roll,this.name,this.course,this.total)
//     }
// }


// var obj=new Student()
// obj.setStudent(01,"Abhi","MeanStack",468)
// obj.printStudent()




class Student{
    constructor(RollNo,Name,Course,Total){
        this.roll=RollNo
        this.name=Name
        this.course=Course
        this.total=Total
    }
    printStudent(){
        console.log(this.roll,this.name,this.course,this.total)
    }
}


var obj=new Student(01,"Abhi","MeanStack",468)
obj.printStudent()
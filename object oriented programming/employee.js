class Employee{
    constructor(id,name,desig,sal,exp){
        this.id=id
        this.name=name
        this.designation=desig
        this.salary=sal
        this.experience=exp

    }
}
var emp1=new Employee(101,"Raju","developer",30000,2)
var emp2=new Employee(102,"Ravi","analyst",25000,3)
var emp3=new Employee(103,"Ramu","qa",30000,3)
var emp4=new Employee(104,"Raghu","programmer",20000,1)
var emp5=new Employee(105,"Ram","backend",40000,2)

employees=[]
employees.push(emp1,emp2,emp3,emp4,emp5)
let high_emp=employees.reduce((obj1,obj2)=>obj1.salary>obj2.salary?obj1:obj2)
console.log(high_emp)
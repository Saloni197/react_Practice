class Person{
    constructor(name){
        console.log(name + " Person constructor")
    }
    getId(){
        return 10
    }
}
class Employeee extends Person{
    constructor(name){
        super(name)
        console.log(name, "employee constructor")
    }
    getId(){
        return super.getId()
    }
}
let e = new Employeee("kavita")
console.log(e.getId())
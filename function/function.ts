function greet(name){
    if(name === "kavita"){
        var greet = "hello Kavita"
    }else{
        var greet = "hello Miss"
    }
    console.log(greet)
}
greet("kavita")

for(let i = 1; i<=5;i++){
    setTimeout(() => {
   console.log(i)     
    },2000);
}

let a = 5;
let b = 10;

a = a + b
console.log("a",a)
console.log("b",b)
b = a - b
console.log("a",a)
console.log("b",b)
a = a - b
console.log("a",a)
console.log("b",b)

var employee = {
    id: 1,
    greet: function(){
        var self = this
        setTimeout(function()  {
       console.log("value of greet function",self.id)     
        }, 1000);
        //console.log("value of greet function",this.id)

    }
}
employee.greet()

function createPerson(fname,lname,age){
    let fullname = fname + lname
    return{
        fname,
        lname,
        fullname,
        isAdult(){
            return age<25
        }
    }
}
    let p = createPerson("Kavita","goyal",24)
    console.log(p.fname)
    console.log(p.lname)
    console.log(p.fullname)
    console.log(p.isAdult())

    //destructuring
    let employee1 = ["kavita", "goyal","female"]

  let [firstname,lastname,gender] = employee1
  console.log(firstname);
  console.log(lastname);
  console.log(gender);
  
  
  
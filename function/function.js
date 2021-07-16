function greet(name) {
    if (name === "kavita") {
        var greet = "hello Kavita";
    }
    else {
        var greet = "hello Miss";
    }
    console.log(greet);
}
greet("kavita");
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 2000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
var a = 5;
var b = 10;
a = a + b;
console.log("a", a);
console.log("b", b);
b = a - b;
console.log("a", a);
console.log("b", b);
a = a - b;
console.log("a", a);
console.log("b", b);
var employee = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () {
            console.log("value of greet function", self.id);
        }, 1000);
        //console.log("value of greet function",this.id)
    }
};
employee.greet();
function createPerson(fname, lname, age) {
    var fullname = fname + lname;
    return {
        fname: fname,
        lname: lname,
        fullname: fullname,
        isAdult: function () {
            return age < 25;
        }
    };
}
var p = createPerson("Kavita", "goyal", 24);
console.log(p.fname);
console.log(p.lname);
console.log(p.fullname);
console.log(p.isAdult());
//destructuring
var employee1 = ["kavita", "goyal", "female"];
var firstname = employee1[0], lastname = employee1[1], gender = employee1[2];
console.log(firstname);
console.log(lastname);
console.log(gender);

var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    // constructor(favourite){
    //     this.favourite = favourite
    // }
    Fruit.staticMethod = function () {
        console.log('Method is static');
    };
    return Fruit;
}());
//let x = new Fruit("Kavita")
Fruit.staticMethod();

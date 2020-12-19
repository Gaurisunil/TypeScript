var Arithmatic = /** @class */ (function () {
    function Arithmatic(value1, value2) {
        this.number1 = value1;
        this.number2 = value2;
    }
    Arithmatic.prototype.Addition = function () { return this.number1 + this.number2; };
    Arithmatic.prototype.Substraction = function () { return this.number1 - this.number2; };
    Arithmatic.prototype.Multiplication = function () { return this.number1 * this.number2; };
    Arithmatic.prototype.Division = function () { return this.number1 / this.number2; };
    return Arithmatic;
}());
var obj1 = new Arithmatic(15, 10);
var obj2 = new Arithmatic(50, 20);
var ret = obj1.Addition();
console.log("Addition is " + ret);
var ret = obj1.Substraction();
console.log("Substraction is " + ret);
var ret = obj1.Multiplication();
console.log("Multiplication is " + ret);
var ret = obj1.Division();
console.log("Division is " + ret);
var ret = obj2.Addition();
console.log("Addition is " + ret);
var ret = obj2.Substraction();
console.log("Substraction is " + ret);
var ret = obj2.Multiplication();
console.log("Multiplication is " + ret);
var ret = obj2.Division();
console.log("Division is " + ret);

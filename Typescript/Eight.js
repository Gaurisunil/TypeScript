var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(value) {
        this.Radius = value;
        this.Pi = 3.14;
    }
    Circle.prototype.Area = function () { return this.Pi * this.Radius * this.Radius; };
    return Circle;
}());
//// Q.3
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () { return 2 * (this.Pi) * (this.Radius); };
    return CircleX;
}(Circle));
var objx1 = new CircleX(10);
var objx2 = new CircleX(15);
var ret = objx1.Area();
console.log("Area is " + ret);
var ret = objx1.Circumference();
console.log("Circumference is " + ret);
var ret = objx2.Area();
console.log("Area is " + ret);
var ret = objx2.Circumference();
console.log("Circumference is " + ret);

function Area(No1) {
    console.log("Inside Area");
    var Ans = 0;
    Ans = 3.14 * No1 * No1;
    return Ans;
}
var result = 0;
var vals = 8;
result = Area(vals);
console.log("Multiplication is:" + result);

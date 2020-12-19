function Summation(arr) {
    var S = 0;
    for (var i = 0; i < arr.lenght; i++) {
        S = S + arr[i];
    }
    return S;
}
var returnval = Summation([23, 6, 7, 4, 5, 7]);
console.log(returnval);

function DisplayFactor(No1) {
    for (var x = 1; x <= No1; x++) {
        if ((No1 % x) == 0) {
            console.log("%d", x);
        }
    }
}
console.log(DisplayFactor(20));

var x = 3;
var y = 10;
console.log(addition(x, y));
console.log(soustraction(x, y));
console.log(multiplication(x, y));
console.log(division(x, y));
function addition(x, y) {
    return (x + y);
}
function soustraction(x, y) {
    return (x - y);
}
function multiplication(x, y) {
    return (x * y);
}
function division(x, y) {
    if (y == 0)
        throw new Error('Il est impossible de diviser par 0');
    return (x / y);
}

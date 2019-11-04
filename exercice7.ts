let x: number = 3;
let y: number = 10;
console.log(addition(x, y));
console.log(soustraction(x, y));
console.log(multiplication(x, y));
console.log(division(x, y));

function addition(x: number, y: number): number {
    return (x + y);
}
function soustraction(x: number, y: number): number {
    return (x - y);
}
function multiplication(x: number, y: number): number {
    return (x * y);
}
function division(x: number, y: number): number {
    if (y == 0)
        throw new Error('Il est impossible de diviser par 0');
    return (x / y);
}
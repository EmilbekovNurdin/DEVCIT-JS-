let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let num = lines[0].split(" ")
let a = parseFloat(num[0])
let b = parseFloat(num[1])
let c = parseFloat(num[2])

if (a < b) {
    temp = a;
    a = b;
    b = temp;
} if (b < c) {
    temp = b;
    b = c;
    c = temp;
} if (a < b) {
    temp = a;
    a = b;
    b = temp;
} if (a >= b + c) {
    console.log(`NAO FORMA TRIANGULO`)
} else if ((a * a) == (b * b) + (c * c)){
        console.log(`TRIANGULO RETANGULO`)
} else if ((a * a) > (b * b) + (c * c)) {
    console.log(`TRIANGULO OBTUSANGULO`)
} else if ((a * a) < (b * b) + (c * c)) {
    console.log(`TRIANGULO ACUTANGULO`)
} if (a == b && b == c) {
    console.log(`TRIANGULO EQUILATERO`)
} else if (a == b || b == c) {
    console.log(`TRIANGULO ISOSCELES`)
}

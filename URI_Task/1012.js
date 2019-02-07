let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let number= lines[0].split(" ")
let a = parseFloat(number[0])
let b = parseFloat(number[1])
let c = parseFloat(number[2])

let tri = a * c / 2
let cir = 3.14159 * c * c 
let tra = (a + b) * c / 2
let Q = b * b
let R = a * b

console.log("TRIANGULO: " + tri.toFixed(3))
console.log("CIRCULO: " + cir.toFixed(3))
console.log("TRAPEZIO: " + tra.toFixed(3))
console.log("QUADRADO: " + Q.toFixed(3))
console.log("RETANGULO: " + R.toFixed(3))
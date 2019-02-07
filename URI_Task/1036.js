let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let num = lines[0].split(" ")
let a = parseFloat(num[0])
let b = parseFloat(num[1])
let c = parseFloat(num[2])

d = ((b * b) - (4 * a * c))
r1 = ((-b + Math.sqrt(d)) / (2 * a))
r2 = ((-b - Math.sqrt(d)) / (2 * a))

if  (a != 0 && d > 0) { 
console.log(`R1 = ` + r1.toFixed(5)) 
console.log(`R2 = ` + r2.toFixed(5))
} else {
console.log(`Impossivel calcular`)
}
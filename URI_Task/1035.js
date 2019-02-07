let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let cons = lines[0].split(" ")
let a = parseInt(cons[0])
let b = parseInt(cons[1])
let c = parseInt(cons[2])
let d = parseInt(cons[3])

if ((b > c) && (d > a) && (c + d) > (a + b) && (c > 0) && (d > 0) && (a / 2)) {
console.log(`Valores aceitos`)
} else {
console.log(`Valores nao aceitos`)
}
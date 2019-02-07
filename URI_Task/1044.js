let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let num = lines[0].split(" ")
let a = parseInt(num[0])
let b = parseInt(num[1])

if (a % b == 0 || b % a == 0) {
    console.log (`Sao Multiplos`)
} else {
    console.log(`Nao sao Multiplos`)
}

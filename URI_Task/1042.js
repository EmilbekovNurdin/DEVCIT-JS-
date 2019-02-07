let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let a = lines[0].split(" ")
let num1 = parseInt(a[0])
let num2 = parseInt(a[1])
let num3 = parseInt(a[2])

min1 = Math.min(num1, Math.min(num2, num3))
if (min1 == num1) {
 min2 = Math.min(num2, num3)
 min3 = Math.max(num2, num3)
} else if (min1 == num2) {
 min2 = Math.min(num1, num3)
 min3 = Math.max(num1, num3)
} else if (min1 == num3) {
 min2 = Math.min(num1, num2)
 min3 = Math.max(num1, num2)
} 
console.log(min1 + `\n` + min2 + `\n` + min3 + `\n`)
console.log(num1 + `\n` + num2 + `\n` + num3)

  
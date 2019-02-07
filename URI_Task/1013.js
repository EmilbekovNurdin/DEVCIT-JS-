let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let number = lines[0].split(" ")
let a = parseInt(number[0])
let b = parseInt(number[1])
let c = parseInt(number[2])

let max = (Math.abs(2 * c - Math.abs(b-a) - b - a) + 2 * c + Math.abs (b-a) + b+a) / 4

console.log(`${max} eh o maior`)
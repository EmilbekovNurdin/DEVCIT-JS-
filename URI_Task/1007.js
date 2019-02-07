let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseInt(lines [0])
let b = parseInt(lines [1])
let c = parseFloat(lines [2])
 

let diff =  (a * b - c * d)
console.log ("DIFERENCA = " + diff)
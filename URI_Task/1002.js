let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let r = parseFloat(lines [0])
let a = r * r * 3.14159 

console.log ("A = " + a.toFixed(4))

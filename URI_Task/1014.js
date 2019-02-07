let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let X = parseInt(lines [0])
let Y = parseFloat(lines [1])

let Z = X / Y 

console.log(Z.toFixed(3) + " km/l")
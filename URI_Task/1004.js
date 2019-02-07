let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let A = parseInt(lines [0])
let B = parseInt(lines [1])

let p = A * B
console.log ("PROD = " + p)

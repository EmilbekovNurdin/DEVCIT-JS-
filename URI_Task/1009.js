let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseInt(lines [0])
let b = parseFloat(lines [1])
let c = parseFloat(lines [2])

let S = b + (c * 0.15) 

console.log("TOTAL = R$ " + S.toFixed(2))
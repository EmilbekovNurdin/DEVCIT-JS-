let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseFloat(lines [0])
let b = parseFloat(lines [1])
let c = parseFloat(lines [2]) 

let m =((a * 2) + (b * 3) + (c * 5)) / (2 + 3 + 5)
console.log ("MEDIA = " + m.toFixed(1))
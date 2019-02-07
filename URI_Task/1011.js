let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let r = parseFloat(lines [0])
let V = 4/3*3.14159*r*r*r 

console.log ("VOLUME = " + V.toFixed(3))

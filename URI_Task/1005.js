let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = parseInt(lines [0])
let b = parseInt(lines [1])
 

let m = (((a * 3.5) + (b * 7.5)) / (3.5 + 7.5))
console.log ("MEDIA = " + m.toFixed(5))
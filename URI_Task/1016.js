let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let t = parseInt(lines[0])

let m = t / ((90 / 60) - (60 / 60)) 

console.log(m + " minutos")
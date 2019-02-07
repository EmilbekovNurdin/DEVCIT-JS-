let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let time = parseInt(lines[0])
let dist = parseInt(lines[1])

let fluent = (time * dist) / 12 

console.log(fluent.toFixed(3))
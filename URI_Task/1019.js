let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]) 
let hours   = Math.trunc(n / 3600)
let minutes = Math.trunc(n % 3600 / 60)
let seconds = n % 3600 % 60 

console.log(`${hours}:${minutes}:${seconds}`)

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]) 
let years   = Math.trunc(n / 366)
let months = Math.trunc(n % 365 / 30)
let days = n % 365 % 30 

console.log(`${years} ano(s)
${months} mes(es)
${days} dia(s)`)

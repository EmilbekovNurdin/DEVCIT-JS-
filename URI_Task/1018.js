let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]) 

let R$100 = Math.trunc(n / 100)
let R$50  = Math.trunc(n % 100 / 50)
let R$20  = Math.trunc(n % 100 % 50 / 20)
let R$10  = Math.trunc(n % 100 % 50 % 20 / 10)
let R$5   = Math.trunc(n % 100 % 50 % 20 % 10 / 5)
let R$2   = Math.trunc(n % 100 % 50 % 20 % 10 % 5 / 2)
let R$1   = Math.trunc(n % 100 % 50 % 20 % 10 % 5 % 2)

console.log(n)
console.log(
    `${R$100} nota(s) de R$ 100,00\n` +
    `${R$50} nota(s) de R$ 50,00\n`   +
    `${R$20} nota(s) de R$ 20,00\n`   +
    `${R$10} nota(s) de R$ 10,00\n`   + 
    `${R$5} nota(s) de R$ 5,00\n`     +
    `${R$2} nota(s) de R$ 2,00\n`     +
    `${R$1} nota(s) de R$ 1,00`
)
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = parseFloat(lines[0]) 
const whole = Math.trunc(n)

const n100 = Math.trunc(whole / 100)
const n50  = Math.trunc(whole % 100 / 50)
const n20  = Math.trunc(whole % 100 % 50 / 20)
const n10  = Math.trunc(whole % 100 % 50 % 20 / 10)
const n5   = Math.trunc(whole % 100 % 50 % 20 % 10 / 5)
const n2   = Math.trunc(whole % 100 % 50 % 20 % 10 % 5 / 2)
const c100 = Math.trunc(whole % 100 % 50 % 20 % 10 % 5 % 2)

const rest = Math.trunc((n -whole) * 100)
const c50 = Math.trunc(rest / 50)
const c25 = Math.trunc(rest % 50 / 25)
const c10 = Math.trunc(rest % 50 % 25 / 10)
const c5 = Math.trunc(rest % 50 % 25 % 10 / 5)
const c1 = Math.trunc(rest % 50 % 25 % 10 % 5)

console.log(
    `NOTAS:\n`                       +
    `${n100} nota(s) de R$ 100.00\n` +
    `${n50} nota(s) de R$ 50.00\n`   +
    `${n20} nota(s) de R$ 20.00\n`   +
    `${n10} nota(s) de R$ 10.00\n`   +
    `${n5} nota(s) de R$ 5.00\n`     +
    `${n2} nota(s) de R$ 2.00\n`     +
    `MOEDAS:\n`                     +
    `${c100} moeda(s) de R$ 1.00\n` +
    `${c50} moeda(s) de R$ 0.50\n`  +
    `${c25} moeda(s) de R$ 0.25\n`  +
    `${c10} moeda(s) de R$ 0.10\n`  +
    `${c5} moeda(s) de R$ 0.05\n`   +
    `${c1} moeda(s) de R$ 0.01`
)
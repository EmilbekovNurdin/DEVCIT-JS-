let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let n = parseFloat(lines[0])
let money
let total
if (n <= 400.00) {
    money = (n * 15) / 100
    total = n + money
    console.log(`Novo salario: ` + total.toFixed(2))
    console.log(`Reajuste ganho: ` + money.toFixed(2))
    console.log(`Em percentual: 15 %`)
} else if (n >= 400.01 && n <= 800) {
    money = (n * 12) / 100
    total = n + money
    console.log(`Novo salario: ` + total.toFixed(2))
    console.log(`Reajuste ganho: ` + money.toFixed(2))
    console.log(`Em percentual: 12 %`)
} else if (n >= 800.01 && n <= 1200.00) {
    money = (n * 10) / 100
    total = n + money
    console.log(`Novo salario: ` + total.toFixed(2))
    console.log(`Reajuste ganho: ` + money.toFixed(2))
    console.log(`Em percentual: 10 %`)
} else if (n >= 1200.01 && n <= 2000.00) {
    money = (n * 7) / 100
    total = n + money
    console.log(`Novo salario: ` + total.toFixed(2))
    console.log(`Reajuste ganho: ` + money.toFixed(2))
    console.log(`Em percentual: 7 %`)
} else if (n > 2000.00) {
    money = (n * 4) / 100
    total = n + money
    console.log(`Novo salario: ` + total.toFixed(2))
    console.log(`Reajuste ganho: ` + money.toFixed(2))
    console.log(`Em percentual: 4 %`)
}

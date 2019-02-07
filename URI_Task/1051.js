let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let tax = 0
let salary = parseFloat(lines[0])

    salary -= 2000
     if (salary < 0) {
      console.log(`Isento`)
     } else {
       let part = salary > 1000 ? 1000 : salary
       tax = part * 0.08
       salary -= 1000
     } if (salary > 0) {
        part = salary > 1500 ? 1500 : salary
        tax += part * 0.18
        salary -= 1500
     } if (salary > 0) {
        tax += salary * 0.28
     } 
     console.log(`R$ ${tax.toFixed(2)}`)
    
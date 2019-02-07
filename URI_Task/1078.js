let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let n = parseInt(lines[0])
    for (let i = 1;  i <= 10; ++i) {
        product = n * i
        console.log(i + ' x ' + n + ' = ' + product)
    }


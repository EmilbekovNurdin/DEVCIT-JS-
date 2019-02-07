let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let x = parseInt(lines[0])
if (x % 2 == 0) {
    ++x
}
for (let i = 0; i < 6; ++i, x+= 2) {
    console.log(x)
}
 

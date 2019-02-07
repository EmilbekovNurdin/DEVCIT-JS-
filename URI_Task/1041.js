let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let num = lines[0].split(" ")
let x = parseFloat(num[0])
let y = parseFloat(num[1])

if (x == 0 && y == 0) {
    console.log(`Origem`)
}else if (x != 0 && y == 0 ) {
    console.log(`Eixo X`)
}else if (y != 0 && x == 0) {
    console.log(`Eixo Y`)
}else if(x > 0 && y > 0) {
    console.log(`Q1`)
}else if(x < 0 && y < 0) {
    console.log(`Q3`)
}else if(x < 0 && y > 0) {
    console.log(`Q2`)
}else {
    console.log(`Q4`)
}



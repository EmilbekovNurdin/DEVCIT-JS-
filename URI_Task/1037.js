let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let num = parseFloat(lines[0])

if  (num >= 0 && num <= 25.0000) {
    console.log(`Intervalo [0,25]`)
}else if (num >= 25.00001 && num <= 50.00000) {
    console.log(`Intervalo (25,50]`)
}else if (num >= 50.000001 && num <= 75.000000){
    console.log(`Intervalo (50,75]`)
}else if (num >= 75.000000 && num <= 100.000000){
    console.log(`Intervalo (75,100]`)
}else {
console.log(`Fora de intervalo`)
}
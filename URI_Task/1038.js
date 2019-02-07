let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let price = lines[0].split(" ")
let x = parseInt(price[0])
let y = parseInt(price[1])

if  (x == 1) {
    price = y * 4.00
    console.log(`Total: R$ ` + price.toFixed(2))
}else if (x == 2) {
    price = y * 4.50
    console.log(`Total: R$ ` + price.toFixed(2))
}else if (x == 3){
    price = y * 5.00
    console.log(`Total: R$ ` + price.toFixed(2))
}else if (x == 4){
    price = y * 2.00
    console.log(`Total: R$ ` + price.toFixed(2))
}else if (x == 5){
    price = y * 1.50
    console.log(`Total: R$ ` + price.toFixed(2))
}
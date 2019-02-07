let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let num = lines[0].split(" ")
let start = parseInt(num[0])
let end = parseInt(num[1])

if (start == end) {
    console.log(`O JOGO DUROU 24 HORA(S)`)
} else if (start > end) {
    duration = (end - start) + 24
    console.log(`O JOGO DUROU ` + duration + ` HORA(S)`)
} else if (start < end) {
    duration = end - start
    console.log(`O JOGO DUROU ` + duration + ` HORA(S)`)
}


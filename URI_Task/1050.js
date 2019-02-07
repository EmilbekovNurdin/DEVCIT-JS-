let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let city = parseInt(lines[0])

     if (city == 61) {
        console.log("Brasilia")
      } else if (city == 71) {
        console.log(`Salvador`)
      } else if (city == 11) {
        console.log(`Sao Paulo`)
      } else if (city == 21) {
        console.log(`Rio de Janeiro`)
      } else if (city == 32){
        console.log(`Juiz de Fora`)
      } else if (city == 19) {        
        console.log(`Campinas`)
      } else if (city == 27) {
        console.log(`Vitoria`)
      } else if (city == 31) {
        console.log(`Belo Horizonte`)
      } else {
        console.log(`DDD nao cadastrado`)
    }
    
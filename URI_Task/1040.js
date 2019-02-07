let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let num = lines[0].split(" ")
let n1 = parseFloat(num[0])
let n2 = parseFloat(num[1])
let n3 = parseFloat(num[2])
let n4 = parseFloat(num[3])

average =((n1 * 2) + (n2 * 3) + ( n3 * 4) + (n4 * 1))/10
  
  if (average >= 7.0) {
    console.log("Media: %.1f\n",average)
    console.log("Aluno aprovado.\n")
} else if (average >= 5.0 && average <= 6.9) {
   console.log(`Media: ` + average)
   console.log(`Aluno em exame.`)
   n5 = input.nextFloat()
   console.log(`Nota do exame: ` + n5)
   recalaverage = (average + n5) / 2
if (recalaverage >= 5.0) {
    console.log(`Aluno aprovado.`)
    
} else {
    console.log(`Aluno reprovado.`)
}    
    console.log(`Media final: ` + recalaverage);
   
  } else if (average < 5.0) {
   console.log(`Media: ` + average);
   console.log(`Aluno reprovado.`)
   }
 
let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let parts = lines[0].split(" ")
let startHour   = parseInt(parts[0])
let startMinute = parseInt(parts[1])
let endHour   = parseInt(parts[2])
let endMinute = parseInt(parts[3])

const start = startHour * 60 + startMinute
const end = endHour * 60 + endMinute

let durationHours
let durationMinutes
if (start < end) {
    const duration = end - start
    durationHours = Math.trunc(duration / 60)
    durationMinutes = duration % 60
} else if (start > end) {
    const duration = (24 * 60) - start + end
    durationHours = Math.trunc(duration / 60)
    durationMinutes = duration % 60
} else {
    durationHours = 24
    durationMinutes = 0 
}
console.log(`O JOGO DUROU ${durationHours} HORA(S) E ${durationMinutes} MINUTO(S)`)
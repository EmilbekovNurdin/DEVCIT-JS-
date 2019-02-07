let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let p1 = lines[0].split(" ")
let x1 = parseFloat(p1[0])
let y1 = parseFloat(p1[1])

let p2 = lines[1].split(" ")
let x2 = parseFloat(p2[0])
let y2 = parseFloat(p2[1])

let dis1 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 -y1) 
let dis2 = Math.sqrt(dis1)

console.log(dis2.toFixed(4))
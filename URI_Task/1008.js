let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let id = parseInt(lines[0])
let hours = parseInt(lines[1])
let hourlySalary = parseFloat(lines[2])

let salary = hours * hourlySalary 

console.log("NUMBER = " + id);
console.log("SALARY = U$ " + salary.toFixed(2));

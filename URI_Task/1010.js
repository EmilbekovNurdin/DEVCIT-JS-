var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const product1Nums = lines[0].split(" ")
const n1 = parseInt(product1Nums[1])
const price1 = parseFloat(product1Nums[2])

const product2Nums = lines[1].split(" ")
const n2 = parseInt(product2Nums[1])
const price2 = parseFloat(product2Nums[2])

const total = n1 * price1 + n2 * price2

console.log("VALOR A PAGAR: R$ " + total.toFixed(2))
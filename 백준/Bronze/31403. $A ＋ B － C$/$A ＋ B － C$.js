let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0];
const b = input[1];
const c = input[2];

let A = Number(a) + Number(b) - Number(c);
let B = String(a) + String(b);
B = Number(B) - Number(c);

console.log(A + '\n' + B);

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let arrA = input[1].split(' ').map(Number);
let arrB = input[2].split(' ').map(Number);

arrA.sort((a, b) => a - b);
arrB.sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < n; i++) {
  answer += arrA[i] * arrB[i];
}

console.log(answer);

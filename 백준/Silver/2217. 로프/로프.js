let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let arr = input.slice(1, n + 1).flatMap((l) => l.split(' ').map(Number));

arr.sort((a, b) => b - a);

let answer = 0;
for (let i = 1; i <= n; i++) {
  answer = Math.max(answer, arr[i - 1] * i);
}

console.log(answer);

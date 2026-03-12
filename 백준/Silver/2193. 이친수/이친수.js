let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

let d = Array(n + 2).fill(0n);

// base
d[1] = 1n;
d[2] = 1n;

for (let i = 3; i <= n; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

console.log(d[n].toString());

// 테이블 정의 -> 점화식 -> 초기 값
// -0

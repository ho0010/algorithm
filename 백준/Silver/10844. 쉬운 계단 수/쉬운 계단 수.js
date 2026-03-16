let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let d = Array.from({ length: N + 2 }, () => Array(11).fill(0));

const MOD = 1000000000;

// 초기
for (let i = 1; i <= 9; i++) {
  d[1][i] = 1;
}

// 실행
for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      d[i][j] = d[i - 1][j + 1] % MOD;
      continue;
    }
    d[i][j] = (d[i - 1][j - 1] + d[i - 1][j + 1]) % MOD;
  }
}

let sum = 0;

for (let i = 0; i <= 9; i++) {
  sum = (sum + d[N][i]) % MOD;
}

console.log(sum);

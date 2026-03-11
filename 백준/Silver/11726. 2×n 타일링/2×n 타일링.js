let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

const mod = 10007;

const d = Array(n + 2).fill(0);

d[1] = 1;
d[2] = 2;

for (let i = 3; i <= n; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % mod;
}

console.log(d[n]);

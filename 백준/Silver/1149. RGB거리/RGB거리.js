let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

const r = Array(n + 1).fill(0);
const g = Array(n + 1).fill(0);
const b = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  let [A, B, C] = input[i].split(' ').map(Number);
  r[i] = A;
  g[i] = B;
  b[i] = C;
}

const d = Array.from({ length: n + 1 }, () => [0, 0]);

d[1][0] = r[1];
d[1][1] = g[1];
d[1][2] = b[1];

for (let i = 2; i <= n; i++) {
  d[i][0] = Math.min(d[i - 1][1], d[i - 1][2]) + r[i];
  d[i][1] = Math.min(d[i - 1][0], d[i - 1][2]) + g[i];
  d[i][2] = Math.min(d[i - 1][0], d[i - 1][1]) + b[i];
}

console.log(Math.min(d[n][0], d[n][1], d[n][2]));

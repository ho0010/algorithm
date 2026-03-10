let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

if (n === 1) {
  console.log(input[1]);
  return;
}

const s = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  s[i] = Number(input[i]);
}

const d = Array.from({ length: n + 1 }, () => [0, 0]);

d[1][1] = s[1];
d[1][2] = 0;
d[2][1] = s[2];
d[2][2] = s[1] + s[2];

for (let i = 3; i <= n; i++) {
  d[i][1] = Math.max(d[i - 2][1], d[i - 2][2]) + s[i];
  d[i][2] = d[i - 1][1] + s[i];
}

console.log(Math.max(d[n][1], d[n][2]));

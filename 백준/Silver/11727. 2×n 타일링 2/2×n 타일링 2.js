let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

let d = Array(n + 1).fill(0);

d[1] = 1;
d[2] = 3;

for (let i = 3; i <= n; i++) {
  d[i] = (d[i - 1] + 2 * d[i - 2]) % 10007;
}

console.log(d[n]);

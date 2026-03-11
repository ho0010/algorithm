let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let a = input[1].split(' ').map(Number);

const d = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  d[i] = d[i - 1] + a[i - 1];
}

const answer = [];

for (let k = 2; k < 2 + m; k++) {
  const [i, j] = input[k].split(' ').map(Number);
  answer.push(d[j] - d[i - 1]);
}

console.log(answer.join('\n'));

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);

const d = Array(12).fill(0);

d[1] = 1;
d[2] = 2;
d[3] = 4;

for (let i = 4; i < 12; i++) {
  d[i] = d[i - 1] + d[i - 2] + d[i - 3];
}

const answer = [];

for (let i = 1; i <= T; i++) {
  const n = Number(input[i]);
  answer.push(d[n]);
}

console.log(answer.join('\n'));

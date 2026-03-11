let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let n = Number(input);

const d = Array(n + 1).fill(0);
const pre = Array(n + 1).fill(0);

d[1] = 0;

for (let i = 2; i <= n; i++) {
  // 1을 빼는 경우
  d[i] = d[i - 1] + 1;
  pre[i] = i - 1;

  // 2로 나누어 떨어지고, 그 방법이 1을 뺀 것보다 더 적다면 갱신
  if (i % 2 === 0 && d[i] > d[i / 2] + 1) {
    d[i] = d[i / 2] + 1;
    pre[i] = i / 2;
  }
  // 3로 나누어 떨어지고, 그 방법이 앞의 방법들보다 더 적다면 갱신
  if (i % 3 === 0 && d[i] > d[i / 3] + 1) {
    d[i] = d[i / 3] + 1;
    pre[i] = i / 3;
  }
}

console.log(d[n]);

let cur = n;
const path = [];

while (1) {
  path.push(cur);
  if (cur === 1) break;
  cur = pre[cur];
}

console.log(path.join(' '));

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let A = Number(input[0]);

let count = 0;
let answer = '';

function sol(a, b, n) {
  // base
  if (n === 1) {
    count++;
    answer += a + ' ' + b + '\n';
    return;
  }

  // n-1개 원판을 기둥 a에서 기둥 6-a-b로 옮긴다.
  sol(a, 6 - a - b, n - 1);

  // n번 원판을 기둥 a에서 기둥 b로 옮긴다.
  count++;
  answer += a + ' ' + b + '\n';

  // n-1개의 원판을 기둥 6-a-b에서 기둥 b로 옮긴다.
  sol(6 - a - b, b, n - 1);
}

sol(1, 3, A);

console.log(count);
console.log(answer.trim());

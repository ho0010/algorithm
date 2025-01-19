let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let A = 0;
let num = 1;
let answer = 0;

while (A <= N) {
  A += num;
  num++;
  answer++;
}
if (A > N) {
  answer--;
}

console.log(answer);

// 1부터 계속 더하다가 그 숫자를 넘어섰을때 하나 빼면 되는 거 아님?

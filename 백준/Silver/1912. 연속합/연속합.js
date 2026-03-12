let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let d = Array(n + 1).fill(0);

// base
d[0] = arr[0];

let answer = d[0];

for (let i = 1; i < n; i++) {
  d[i] = Math.max(d[i - 1] + arr[i], arr[i]);

  if (d[i] > answer) {
    answer = d[i];
  }
}

console.log(answer);

// 테이블 정의 -> 점화식 -> 초기 값
// 끝나는거 기준으로
// D[i] = i 번째 수를 마지막으로 포함하는 연속합 중 최대 값.
// 아 새로운 값을 포함 하거나 안하거나 선택만 하면 되는거니까. 왜냐면 그 앞은 무조건 나올 수 있는 것 중 최대 값이니

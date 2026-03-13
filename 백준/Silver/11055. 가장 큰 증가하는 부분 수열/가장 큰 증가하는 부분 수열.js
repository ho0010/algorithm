let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let d = [...arr];

let answer = d[0];

// 현재 내가 밟을 숫자
for (let i = 1; i < n; i++) {
  // 내 앞까지의 숫자들
  for (let j = 0; j < i; j++) {
    // 과거의 숫자가 현재 숫자보다 작아야 증가 조건이 가능
    if (arr[j] < arr[i]) {
      // 조건 만족 시, 과거의 합 + 내 숫자, 현재 내 합을 비교해 더 큰 값으로 갱신
      d[i] = Math.max(d[i], d[j] + arr[i]);
    }
  }
  if (d[i] > answer) {
    answer = d[i];
  }
}

console.log(answer);
// 이중 for 문 생각하긴 했는데 이게 터질거라고 생각했음.

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, S] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let issued = Array(N).fill(0);

let cnt = 0;

function sol(k) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (issued[i] === true) {
      sum += arr[i];
      count++;
    }
  }
  if (count > 0 && sum === S) {
    cnt++;
  }

  for (let i = k; i < N; i++) {
    if (!issued[i]) {
      issued[i] = true;
      sol(i + 1);
      issued[i] = false;
    }
  }
}

sol(0);

console.log(cnt);

// 시간
// 발산
// 현재 담겨있는 숫자를 표현할 배열 arr
// 지금 담겨있는지 여부를 나타내는 issued arr
// cnt
// 현재 몇 개가 담겨있는지 k
// base = k === N 이면 끝
// 리턴은 아님 모든 경우의 수를 다 들어가야 하기 때문

// 아.. 공집합 방지.. 그리고 뽑았던 거 다시 볼 필요가 없음..

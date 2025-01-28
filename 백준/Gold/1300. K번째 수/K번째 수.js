let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let k = Number(input[1]);

let start = 1;
let end = 10 ** 10;
let answer = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;

  for (let i = 1; i <= N; i++) {
    total += Math.min(Math.floor(mid / i), N);
  }

  if (total >= k) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer);

// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

// 실제로 N이 들어오면 배열을 만들어야하나? => 시간복잡도 측면에서안됨
// 왜 이분탐색으로 풀 수 있는지?
// 현재 mid보다 작거나 같은 데이터의 수가 K개 이상이 되는 조건을 만족하는 mid 중에서 가장 작은 값을 구하면 된다.

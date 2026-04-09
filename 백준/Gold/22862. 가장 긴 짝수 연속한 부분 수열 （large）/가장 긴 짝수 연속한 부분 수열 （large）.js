let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let left = 0;
let oddCount = 0;
let answer = 0;

for (let right = 0; right < N; right++) {
  let isOdd = arr[right] % 2;
  if (isOdd === 1) {
    oddCount++;
  }
  while (oddCount > M) {
    if (arr[left] % 2 === 1) {
      oddCount--;
    }
    left++;
  }

  let nowCount = right - left + 1 - oddCount;
  answer = Math.max(nowCount, answer);
}

console.log(answer);

// K 번 삭제한 후 짝수로 이루어져 있는 연속한 부분 수열 중 가장 긴 길이
// 무조건 홀수를 지워야 한다.
// 앞에서부터 모든 경우의 수로 모든 홀수를 지운다?
// 지우는 걸 투포인터로?

// 홀수 set 만들어서 filter 하는걸 생각했는데 N 탐색 * N 필터라서 N^2 이라서 터진다.
// -> 구간 내 홀수 개수를 유지하는 것으로 해결할 수 있다.
// left를 어떻게 당겨야 하나? 도 고민했는데 이거는 구간에 포함된 홀수 개수가 K개를 넘겼을 때

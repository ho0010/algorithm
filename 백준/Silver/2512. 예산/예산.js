let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let budget = Number(input[2]);
let arrLength = Number(arr.length);
let averageBudget;
let answer = 0;

for (let i = 0; i < N; i++) {
  averageBudget = budget / arrLength;
  if (averageBudget > arr[i]) {
    arrLength--;
    budget -= arr[i];
  } else {
    answer = Math.floor(averageBudget);
    break;
  }
}
if (arrLength === 0) {
  answer = arr[arr.length - 1];
}

console.log(answer);

// 모든 요청이 배정될 수 있는 경우와 없는 경우
// 있는 경우 큰 값을 반환
// 없는 경우 현재 받아야하는 지방의 수 / 남은 예산 해서 해당 지방의 예산이 더 작으면
// 해당 지방을 제외하고 남은 예산도 수정하는 것

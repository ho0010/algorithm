let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

function lower(arr, target, st) {
  let en = arr.length;
  while (st < en) {
    let mid = Math.floor((st + en) / 2);
    if (arr[mid] >= target) {
      en = mid;
    } else {
      st = mid + 1;
    }
  }
  return st;
}

function upper(arr, target, st) {
  let en = arr.length;
  while (st < en) {
    let mid = Math.floor((st + en) / 2);
    if (arr[mid] > target) {
      en = mid;
    } else {
      st = mid + 1;
    }
  }
  return st;
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let target = -(arr[i] + arr[j]);

    let lb = lower(arr, target, j + 1);
    let ub = upper(arr, target, j + 1);

    answer += ub - lb;
  }
}

console.log(answer);

// 세 명의 코딩 실력의 합이 0
// 0으로 만들 수 있는 조합의 수
// 코딩 실력이 같은 학생들이 있음

// 두 개 까지의 경우의 수는 순서대로 더하고 나머지 하나만 이분탐색?
// N * N * logN

// break 이렇게 하면
// 개수를 세야해서 lowerbound,와 upperbound

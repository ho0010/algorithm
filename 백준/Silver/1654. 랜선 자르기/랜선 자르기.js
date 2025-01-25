let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[0].split(' ').map(Number);
let K = arr[0];
let N = arr[1];
let cableArr = [];

for (let i = 1; i < K + 1; i++) {
  cableArr.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...cableArr);
let answer = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let cableNum = 0;
  for (let x of cableArr) {
    cableNum += Math.floor(x / mid);
  }
  if (cableNum >= N) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);

// 이진탐색 => mid 값 조작
// 만들어진 cable의 개수가 N보다 크거나 같아야 함
// cable 길이의 최댓값

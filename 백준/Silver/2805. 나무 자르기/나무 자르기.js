let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[0].split(' ').map(Number);
let N = arr[0];
let M = arr[1];
let treeArr = input[1].split(' ').map(Number);
let answer = 0;

let start = 0;
let end = Math.max(...treeArr);

while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);
  for (let x of treeArr) {
    if (x > mid) {
      total += x - mid;
    }
  }
  if (total < M) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);

// 이진탐색
// mid 값 조작 => 이진 탐색에 맞게

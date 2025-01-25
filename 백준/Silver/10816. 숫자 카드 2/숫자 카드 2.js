let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const myCardArr = input[1].split(' ').map(Number);
const M = Number(input[2]);
const targetCardArr = input[3].split(' ').map(Number);

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const upperBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const countByRange = (arr, leftValue, rightValue) => {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);

  return rightIndex - leftIndex;
};

myCardArr.sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < M; i++) {
  let cnt = countByRange(myCardArr, targetCardArr[i], targetCardArr[i]);
  answer += cnt + ' ';
}
console.log(answer);

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.reverse(); // 순서를 뒤집어 LIS 문제로 변환

let d = [0];

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

for (x of arr) {
  if (d[d.length - 1] < x) {
    d.push(x);
  } else {
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}
console.log(n - (d.length - 1));

// 특정한 수열에서 가장 긴 증가하는 부분 수열을 찾는 문제
// Longest Increasing Subsequence (LIS) 알고리즘
// 현재 원소가 가장 크다면 뒤에 삽입하고, 그렇지 않다면 최대한 왼쪽의 원소와 교체

// 이걸 떠올릴 수가 있나?

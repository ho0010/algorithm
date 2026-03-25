let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

let arr = input.slice(1, n + 1).flatMap((l) => l.split(' ').map(Number));

arr.sort((a, b) => a - b);

let twoSum = [];

for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    twoSum.push(arr[i] + arr[j]);
  }
}

twoSum.sort((a, b) => a - b);

function bSearch(arr, target) {
  let st = 0;
  let en = arr.length - 1;
  while (st <= en) {
    let mid = Math.floor((st + en) / 2);
    if (arr[mid] < target) st = mid + 1;
    else if (arr[mid] > target) en = mid - 1;
    else return true;
  }
  return false;
}

for (let i = n - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    if (bSearch(twoSum, arr[i] - arr[j])) {
      return console.log(arr[i]);
    }
  }
}

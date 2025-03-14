const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const firstArr = input[1].split(' ').map(Number);
const M = Number(input[2]);
const secondArr = input[3].split(' ').map(Number);
firstArr.sort((a, b) => a - b);

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return 1;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
};

const result = secondArr.map((num) => binarySearch(firstArr, num));
console.log(result.join('\n'));

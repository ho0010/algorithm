let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[0].split(' ');
const n = arr[0];
let k = arr[1];
let priceArr = [];
let answer = 0;

for (let i = 1; i < n + 1; i++) {
  priceArr.push(input[i]);
}

for (let j = n - 1; j > -1; j--) {
  let quotient = Math.floor(k / priceArr[j]);
  if (quotient >= 1) {
    answer += quotient;
    k -= quotient * priceArr[j];
  }
}

console.log(answer);

// n 개수만큼 주어진 값을 배열에 담는 기능
// 계산하는 기능

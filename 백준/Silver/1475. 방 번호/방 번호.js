let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function solution(K) {
  let temp = K;
  let index = 0;
  while (temp !== 0) {
    arr[temp % 10] += 1;
    temp = Math.floor(temp / 10);
  }

  let sixNum = arr[6];
  let nineNum = arr[9];

  arr[6] = Math.round((sixNum + nineNum) / 2);
  arr[9] = 0;

  let max = arr[0];
  for (let i = 1; i < 9; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

solution(N);

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let M = Number(input[2]);

function solution(N, arr, M) {
  let indexArr = Array(100001).fill(0);
  let cnt = 0;

  arr.forEach((a) => {
    indexArr[a] = 1;
  });

  for (let i = 0; i < M / 2; i++) {
    if (indexArr[i] === 1 && indexArr[M - i] === 1) {
      cnt++;
    }
  }

  console.log(cnt);
}

solution(N, arr, M);
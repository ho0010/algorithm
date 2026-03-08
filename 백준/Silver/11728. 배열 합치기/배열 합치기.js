let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);

let AIdx = 0;
let BIdx = 0;
let answer = [];

for (let i = 0; i < N + M; i++) {
  if (AIdx === A.length) {
    answer.push(B[BIdx]);
    BIdx++;
    continue;
  } else if (BIdx === B.length) {
    answer.push(A[AIdx]);
    AIdx++;
    continue;
  }

  if (A[AIdx] <= B[BIdx]) {
    answer.push(A[AIdx]);
    AIdx++;
  } else {
    answer.push(B[BIdx]);
    BIdx++;
  }
}

console.log(answer.join(' '));

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);

let index = 1;
let answer = [];

for (let i = 0; i < T; i++) {
  let arrA = input[index + 1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let arrB = input[index + 2]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let cnt = 0;

  let indexB = 0;

  for (let j = 0; j < arrA.length; j++) {
    // 먹었어, indexB 올리고 한번 더
    if (arrA[j] > arrB[indexB]) {
      indexB++;
      j--;
    } // 못먹음
    else {
      cnt += indexB;
      continue;
    }
  }
  answer.push(cnt);

  index += 3;
}
console.log(answer.join('\n'));

// 각각 전부 비교하면? 아니야
// 이분탐색도 되겠지만 각각 sort 먼저 시키고 idx 이용해보자
// 작은 것 부터 확인해 하나씩 애가 먹은건 다음 애도 먹을 수 있어 그리고 그 실패한 인덱스부터 시도하면 됨

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let cntArr = Array(200001).fill(0);

let st = 0;
let answer = 0;

for (let en = 0; en < N; en++) {
  cntArr[arr[en]] += 1;

  while (cntArr[arr[en]] > K) {
    cntArr[arr[st]] -= 1;
    st++;
  }

  answer = Math.max(answer, en - st + 1);
}
console.log(answer);

// 같은 원소가 K개 이하인 최장 연속 부분 수열의 길이
// DAA + Two p
// st, en 각각 늘려나감
// en을 늘릴 때 그 수의 cnt 확인해서 K보다 크면 st를 계속 땡겨야 함 그 cnt가 ===k 까지
// st 순서때문에..

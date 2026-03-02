let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = [];
let stack = [];

function sol(k) {
  if (stack.length === M) {
    answer.push(stack.join(' '));
    return;
  }
  for (let i = 0; i < N; i++) {
    stack.push(arr[i]);
    sol(k + 1);
    stack.pop();
  }
}

sol(0);

console.log([...new Set(answer)].join('\n'));

// 발산
// 결과적으로는 다른 정답 배열과 같은게 없음

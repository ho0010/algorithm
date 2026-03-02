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
  for (let i = k; i < N; i++) {
    stack.push(arr[i]);
    sol(i);
    stack.pop();
  }
}

sol(0);

console.log(answer.join('\n'));

// 발산
// 모든 경우의 수가 필요함

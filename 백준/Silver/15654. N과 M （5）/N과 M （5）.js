let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let issued = Array(N).fill(0);

let stack = [];
let answer = [];

arr.sort((a, b) => a - b);

function sol(k) {
  if (stack.length === M) {
    answer.push(stack.join(' '));
    return;
  }

  // 하나씩 방문하면서 전체 돌기
  for (let i = 0; i < N; i++) {
    if (!issued[i]) {
      issued[i] = true;
      stack.push(arr[i]);
      sol(k + 1);
      issued[i] = false;
      stack.pop();
    }
  }
}

sol(0);

console.log(answer.join('\n'));

// 시간

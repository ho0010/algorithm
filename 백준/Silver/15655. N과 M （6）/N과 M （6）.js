let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let issued = Array(N).fill(0);

arr.sort((a, b) => a - b);

let answer = [];
let stack = [];

function sol(k) {
  if (stack.length === M) {
    answer.push(stack.join(' '));
    return;
  }
  for (let i = k; i < N; i++) {
    // 사용중이지 않은지
    if (stack.length === 1 && stack[0] > arr[i]) {
      continue;
    }
    if (!issued[i]) {
      issued[i] = true;
      stack.push(arr[i]);
      sol(i + 1);
      issued[i] = false;
      stack.pop();
    }
  }
}

sol(0);

console.log(answer.join('\n'));

// 발산
// 몇 개 쌓였는지를 매개변수 K로 넘긴다.
// K === M 이면 정답 배열에 담고 return
// visited가 필요할까? no -> yes

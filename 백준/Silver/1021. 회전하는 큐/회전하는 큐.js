let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);

let targets = input[1].split(' ').map(Number);

let deque = [];
for (let i = 1; i <= N; i++) {
  deque.push(i);
}
let answer = 0;

for (const x of targets) {
  const position = deque.indexOf(x);
  const left = position;
  const right = deque.length - position;

  if (left <= right) {
    // 왼쪽 회전
    for (let i = 0; i < left; i++) deque.push(deque.shift());
    answer += left;
  } else {
    // 오른쪽 회전
    for (let i = 0; i < right; i++) deque.unshift(deque.pop());
    answer += right;
  }

  deque.shift();
}
console.log(answer);

// 50m - 1
// 순서대로 숫자를 빼내면 된다. 앞으로 가거나 뒤로 가거나 더 빠른 걸로 가면 된다.
// 가장 처음은 1이다. 앞으로 갈지 뒤로 갈지 결정할 때 탐색을 해야하지 않나?

// “배열 덱 + index 찾기” (가장 흔함, N이 작으면 충분)
// 덱을 그냥 배열로 유지
// 매 타겟마다 idx = deque.indexOf(target)
// left = idx, right = len - idx
// 더 작은 쪽만큼 회전 (shift/push 또는 pop/unshift)
// front 제거(shift)

// 근데 이거 생각 자체가 indexOf 쓰면 엄청 편해지네..
// 하나씩 탐색할 필요가 없구나.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let queens = [];

// 해당 위치에 퀸을 놓을 수 있는지 확인
function possible(x, y) {
  for (let [a, b] of queens) {
    if (a == x || b == y) return false;
    if (Math.abs(a - x) == Math.abs(b - y)) return false;
  }
  return true;
}

let cnt = 0;
function dfs(row) {
  if (row == n) cnt += 1; // 퀸을 N개 배치 가능한 경우 카운트
  // 현재 행에 존재하는 열을 하나씩 확인
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue; // 현재 위치에 놓을 수 없다면 continue
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop(); // 현재 위치에서 퀸 제거
  }
}
dfs(0);
console.log(cnt);

// 강의

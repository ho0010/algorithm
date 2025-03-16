const fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input[0]);
const colorArr = [];
const count = 0;
let visitedArr = [];

for (let i = 1; i <= N; i++) {
  colorArr[i] = [,];
  visitedArr[i] = new Array(N + 1).fill(false);
  colorArr[i].push(...input[i].split(''));
}
console.log(visitedArr);

const dfs = (x, y) => {
  if (visitedArr[x][y]) {
    return false;
  }
  visitedArr[x][y] = true;
};

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (dfs(i, j)) {
      count++;
    }
  }
}

console.log(count);

// 빨, 파, 초
// 빨초, 파
// 모든 좌표에 대해 DFS 실행
// 상하좌우에 같은 문자열이 있는지 확인하는 로직
// visited

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let map = [];
let countArr = [];
let visitedArr = Array.from({ length: N }, () => Array(N).fill(false));

// 집 위치 입력
for (let i = 0; i < N; i++) {
  map.push(input[i + 1].split('').map(Number));
}

const dfs = (x, y) => {
  if (x < 0 || x >= N || y < 0 || y >= N || visitedArr[x][y] || map[x][y] === 0) return 0;

  visitedArr[x][y] = true;
  let count = 1;

  count += dfs(x + 1, y);
  count += dfs(x - 1, y);
  count += dfs(x, y + 1);
  count += dfs(x, y - 1);

  return count;
};

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visitedArr[i][j]) {
      let count = dfs(i, j);
      if (count > 0) {
        answer++;
        countArr.push(count);
      }
    }
  }
}

console.log(answer);
countArr.sort((a, b) => a - b).forEach((count) => console.log(count));

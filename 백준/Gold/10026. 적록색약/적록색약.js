const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let colorArr = [];
let count = 0;
let count2 = 0;
let visitedArr = [];
let changedColorVisitedArr = [];
let changedColorArr = [];

for (let i = 1; i <= N; i++) {
  colorArr[i] = [,];
  changedColorArr[i] = [,];
  colorArr[i].push(...input[i].split(''));
  changedColorArr[i].push(...input[i].split(''));
  visitedArr[i] = new Array(N + 1).fill(false);
  changedColorVisitedArr[i] = new Array(N + 1).fill(false);
}

// 적록색약 색 변환
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    let color = changedColorArr[i][j];
    if (color == 'G') {
      changedColorArr[i][j] = 'R';
    }
  }
}

const dfs = (x, y, color) => {
  if (visitedArr[x][y] || x <= 0 || x > N || y <= 0 || y > N) {
    return false;
  }
  visitedArr[x][y] = true;

  if (x - 1 >= 1 && !visitedArr[x - 1][y] && colorArr[x - 1][y] == color) {
    dfs(x - 1, y, color);
  }
  if (x + 1 <= N && !visitedArr[x + 1][y] && colorArr[x + 1][y] == color) {
    dfs(x + 1, y, color);
  }
  if (y - 1 >= 1 && !visitedArr[x][y - 1] && colorArr[x][y - 1] == color) {
    dfs(x, y - 1, color);
  }
  if (y + 1 <= N && !visitedArr[x][y + 1] && colorArr[x][y + 1] == color) {
    dfs(x, y + 1, color);
  }
  return true;
};

const dfs2 = (x, y, color) => {
  if (changedColorVisitedArr[x][y] || x <= 0 || x > N || y <= 0 || y > N) {
    return false;
  }
  changedColorVisitedArr[x][y] = true;

  if (x - 1 >= 1 && !changedColorVisitedArr[x - 1][y] && changedColorArr[x - 1][y] == color) {
    dfs2(x - 1, y, color);
  }
  if (x + 1 <= N && !changedColorVisitedArr[x + 1][y] && changedColorArr[x + 1][y] == color) {
    dfs2(x + 1, y, color);
  }
  if (y - 1 >= 1 && !changedColorVisitedArr[x][y - 1] && changedColorArr[x][y - 1] == color) {
    dfs2(x, y - 1, color);
  }
  if (y + 1 <= N && !changedColorVisitedArr[x][y + 1] && changedColorArr[x][y + 1] == color) {
    dfs2(x, y + 1, color);
  }
  return true;
};

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    let color = colorArr[i][j];
    if (dfs(i, j, color)) {
      count++;
    }
    let color2 = changedColorArr[i][j];
    if (dfs2(i, j, color2)) {
      count2++;
    }
  }
}

console.log(count, count2);

// 빨, 파, 초
// 빨초, 파
// 모든 좌표에 대해 DFS 실행
// 상하좌우에 같은 문자열이 있는지 확인하는 로직
// visited

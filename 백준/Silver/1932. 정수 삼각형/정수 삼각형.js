let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
// 값 입력
let grid = input.slice(1, n + 1).map((l) => l.split(' ').map(Number));

let d = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

// base
d[0][0] = grid[0][0];

// 점화식
for (let i = 1; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j === 0) {
      d[i][j] = grid[i][j] + d[i - 1][j];
    } else if (j === i) {
      d[i][j] = grid[i][j] + d[i - 1][j - 1];
    } else {
      d[i][j] = grid[i][j] + Math.max(d[i - 1][j], d[i - 1][j - 1]);
    }
  }
}

let max = 0;
for (let i = 0; i < n; i++) {
  max = Math.max(max, d[n - 1][i]);
}

console.log(max);
// 모든 경우의 수? 근데 약간 재귀랑 비슷하긴 하네
// 테이블 정의: D[i] = i 높이 까지 갔을 때 최대 값. 2차원 배열
// 점화식: D[i][j] = if j > 0 && j+1<= h -> Math.max(D[i-1][j],D[i-1][j+1] )

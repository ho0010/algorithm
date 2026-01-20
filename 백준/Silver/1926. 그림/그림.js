let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const grid = input.slice(1, N + 1).map((l) => l.trim().split(' ').map(Number));

const dist = Array.from({ length: N }, () => Array(M).fill(-1));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let count = 0;
let maxArea = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const q = [];
    let head = 0;
    if (grid[i][j] === 0 || dist[i][j] !== -1) continue;
    count++;
    let area = 0;
    dist[i][j] = 0;
    q.push([i, j]);

    while (head < q.length) {
      const [r, c] = q[head];
      head++;
      area++;
      for (let k = 0; k < 4; k++) {
        const nr = r + dr[k];
        const nc = c + dc[k];
        if (nr < 0 || nc < 0 || nr >= N || nc >= M) continue;

        if (grid[nr][nc] === 0) continue;

        if (dist[nr][nc] !== -1) continue;

        dist[nr][nc] = 0;
        q.push([nr, nc]);
      }
    }
    maxArea = Math.max(maxArea, area);
  }
}
console.log(count);
console.log(maxArea);

// 45m +
// 가장 큰 값 찾는 로직
// 모든 -1을 다 도는 로직

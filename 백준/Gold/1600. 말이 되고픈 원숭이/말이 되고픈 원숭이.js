let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let K = Number(input[0]);
let [W, H] = input[1].split(' ').map(Number);
let grid = input.slice(2, 2 + H).map((l) => l.split(' ').map(Number));
let dist = Array.from({ length: H }, () => Array.from({ length: W }, () => Array(K + 1).fill(-1)));

let head = 0;
let q = [];

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const hr = [1, 2, 2, 1, -1, -2, -2, -1];
const hc = [-2, -1, 1, 2, 2, 1, -1, -2];

dist[0][0][0] = 0;
q.push([0, 0, 0]);

while (q.length > head) {
  let [r, c, k] = q[head++];

  // base
  if (r === H - 1 && c === W - 1) {
    return console.log(dist[r][c][k]);
  }

  // 일반 전파
  for (let i = 0; i < 4; i++) {
    let nr = r + dr[i];
    let nc = c + dc[i];

    if (nr < 0 || nc < 0 || nr >= H || nc >= W) {
      continue;
    }

    // 평지이고 방문한 적 없으니 이동 가능
    if (grid[nr][nc] === 0) {
      if (dist[nr][nc][k] === -1) {
        dist[nr][nc][k] = dist[r][c][k] + 1;
        q.push([nr, nc, k]);
      }
    }
  }

  // 말 전파
  for (let j = 0; j < 8; j++) {
    let nr = r + hr[j];
    let nc = c + hc[j];

    if (nr < 0 || nc < 0 || nr >= H || nc >= W) {
      continue;
    }

    // 말 점프 다 썼으면 이동 못함
    if (k === K) {
      continue;
    }

    // 평지이고 방문한 적 없으니 이동 가능
    if (grid[nr][nc] === 0) {
      if (dist[nr][nc][k + 1] === -1) {
        dist[nr][nc][k + 1] = dist[r][c][k] + 1;
        q.push([nr, nc, k + 1]);
      }
    }
  }
}
console.log(-1);

// 발산
// 최소 dist를 구하는 문제
// 모든 경우의 수를 따져보는 문제라고 판단.
// 벽 부수고 이동하기랑 비슷한 문제 같은데
// BFS로 d , h 다 전파시키는데 h는 제한이 있으니까 이걸 어떻게 표현하지?
// dist를 3차원으로 만들면?

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);

let grid = input.slice(1, N + 1).map((l) => l.split('').map(Number));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function bfs() {
  let q = [];
  let head = 0;

  let dist = Array.from({ length: N }, () => Array.from({ length: M }, () => Array(2).fill(-1)));

  dist[0][0][0] = 1;
  q.push([0, 0, 0]);

  while (q.length > head) {
    let [r, c, isBroken] = q[head++];

    if (r === N - 1 && c === M - 1) {
      return dist[r][c][isBroken];
    }

    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];

      // 유효하지 않은 범위
      if (nr < 0 || nc < 0 || nr >= N || nc >= M) {
        continue;
      }
      // 이동할 수 있는 곳
      if (grid[nr][nc] === 0) {
        // 방문하지 않은 곳
        if (dist[nr][nc][isBroken] === -1) {
          dist[nr][nc][isBroken] = dist[r][c][isBroken] + 1;
          q.push([nr, nc, isBroken]);
        }
      }
      // 벽인 경우
      else if (grid[nr][nc] === 1) {
        // 벽을 안부쉈으면 부술 수 있음
        if (isBroken === 0 && dist[nr][nc][1] === -1) {
          dist[nr][nc][1] = dist[r][c][0] + 1;
          q.push([nr, nc, 1]);
        }
      }
    }
  }

  return -1;
}

console.log(bfs());

// 시간 50m -> 메모리초과 힌트1 ->

// 발산
// 일단 기본적으로 dist가 필요하다고 판단
// 벽을 한 번 부술 수 있는데 이걸 어떻게 써야할까?
// 모든 벽을 하나씩 부수고 dist를 돌리고 그 중 최소를 구하면 어떨까?
// 시간 복잡도 판단이 필요할까? -> 2초면 충분하다고 판단.
// 큐를 기본적으로 사용

// 수렴
// 전역으로 min 선언 후 벽 하나를 부수고 dfs 호출, 어차피 끝 좌표 구하는거니까

// 전체 BFS를 돌리면 터짐 N*M ^2 이라 1조임.

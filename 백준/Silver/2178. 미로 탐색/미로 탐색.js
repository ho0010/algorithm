let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let grid = input.slice(1, N + 1).map((l) => l.split('').map(Number));

const dist = Array.from({ length: N }, () => Array(M).fill(-1));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let q = [];
let head = 0;

grid[0][0] = 0;
q.push([0, 0]);

dist[0][0] = 1;

let count = 1;

while (head < q.length) {
  let [r, c] = q[head];

  for (let i = 0; i < 4; i++) {
    let nr = r + dr[i];
    let nc = c + dc[i];

    if (nr < 0 || nc < 0 || nr >= N || nc >= M) {
      continue;
    }

    if (grid[nr][nc] === 0) continue;

    q.push([nr, nc]);
    grid[nr][nc] = 0;
    dist[nr][nc] = dist[r][c] + 1;
  }
  head++;
  count++;
}

console.log(dist[N - 1][M - 1]);

// 40m + 50 ~
// 다시 돌아가면 안됨 -> 최소 칸수가 아니기 때문
// 0인 곳 못 가고

// 도착지가 아닌 곳 혹은 잘못된 길을 들었을 때는 어떻게 하지?
// 갔는데 더 갈 곳이 없고 종착지가 아니라면 queue에서 버리고 count -1하고 head를 내리면?
// 갔는데 종점이면 그냥 끝내야하지 않나?

// 위는 잘못된 생각임.
// 올바른 BFS 사고는 “한 칸을 큐에 넣는 순간 그 칸의 최단거리가 확정된다.” 그래서 dist[nr][nc] = dist[r][c] + 1을 하고, 이미 방문한 칸은 다시 안 넣는 거.
// 정리하면: “잘못된 길을 갔다가 취소한다” = DFS 백트래킹 사고 	2178은 “갈 수 있는 길을 동시에 넓혀서 최단거리 찾는다” = BFS 사고

// 갈 곳이 없으면 버려야하는데 그게 종착지인지는 어캐 알지? 좌표 기록을 해야 하나 -> 코드 상으로 알 수 있지 않나?
// 종료 조건 -> 큐에 넣을 값이 없어서 continue 되다가 head가 커져서 끝나는 거임.

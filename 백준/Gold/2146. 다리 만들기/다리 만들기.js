let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let grid = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));
let visited = Array.from({ length: N }, () => Array(N).fill(false));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let min = Infinity;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] === 1 && visited[i][j] === false) {
      let head = 0;
      let q = [];
      // 다중 BFS 시작을 위한 배열
      let current = [];

      q.push([i, j]);
      visited[i][j] = true;
      current.push([i, j]);

      while (q.length > head) {
        let [r, c] = q[head++];

        for (let i = 0; i < 4; i++) {
          let nr = r + dr[i];
          let nc = c + dc[i];

          // 유효하지 않은 범위
          if (nr < 0 || nc < 0 || nr >= N || nc >= N) {
            continue;
          }
          // 이미 방문했다면
          if (visited[nr][nc] === true) {
            continue;
          }
          // 땅이라면 -> 같은 섬임
          if (grid[nr][nc] === 1) {
            q.push([nr, nc]);
            visited[nr][nc] = true;
            current.push([nr, nc]);
          }
        }
      }

      let dist = Array.from({ length: N }, () => Array(N).fill(Infinity));

      let countQ = [];
      let countHead = 0;

      // 다중 BFS 시작을 기억 -> 여러 곳에서 동시적으로 시작하는건데 이걸 하나씩 처리해서 같은 섬인지 확인하고 이게 훨씬 더 어려움

      for (let cell of current) {
        countQ.push(cell);
        dist[[cell[0]]][cell[1]] = 0;
      }

      // found 플래그 사용 보기
      let found = false;

      while (countQ.length > countHead) {
        let [r, c] = countQ[countHead++];

        for (let i = 0; i < 4; i++) {
          let nr = r + dr[i];
          let nc = c + dc[i];

          // 유효하지 않은 범위
          if (nr < 0 || nc < 0 || nr >= N || nc >= N) {
            continue;
          }

          // 두 번째 BFS에서는 글로벌 visited가 아닌 dist로 방문 체크
          if (dist[nr][nc] !== Infinity) continue;

          // 바다
          if (grid[nr][nc] === 0) {
            dist[nr][nc] = dist[r][c] + 1;
            countQ.push([nr, nc]);
            // 다른 섬
          } else if (grid[nr][nc] === 1) {
            min = Math.min(dist[r][c], min);
            found = true;
            break;
          }
          if (found) break;
        }
      }
    }
  }
}

console.log(min);

// 발산
// 각 섬에서 전부 BFS를 퍼뜨렸을 때 최소 값으로 다른 섬과 맞닿는 부분
// 각 섬 모든 좌표에서 BFS를 돌렸을 때 (같은 섬이면 count 그대로) 0을 만나면 count++ 가장 최소인 값을 return
// 이걸 모든 섬마다 실행해서 가장 최소 값을 리턴

// 지금 돌아가고 있는 섬인지를 먼저 체킹을 해야 함

// 수렴
// 모든 좌표 대상으로 실행 grid 1이고 visited가 false
// bfs 돌려서 visited 처리를 시켜 그게 끝나면
// visited인 모든 좌표에서 count해서 다른 섬 만나는 최소 값을 리턴

// 하나에서 dist 배열 만들고 1이면 0 계속 넣다가 0 만나면 이전+1 값 넣고 반복하다가 1인 값인데 visited false 만나면 return시켜보자

// 60m -> 힌트: visited 배열 오염
// 핵심은 다중 BFS를 이용하는 것, 전역 visited가 오염되지 않도록 하는 것
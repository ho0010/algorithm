let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let grid = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let year = 0;
while (true) {
  let visited = Array.from({ length: N }, () => Array(M).fill(false));

  let section = 0;

  let q = [];
  let head = 0;

  let nowGrid = grid.map((l) => [...l]);

  // 각 좌표마다 실행
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      // 빙산이 있고 방문한 적 없고
      if (grid[x][y] !== 0 && visited[x][y] === false) {
        // 한 덩어리 취급 하며 BFS 실행
        section++;

        q.push([x, y]);
        visited[x][y] = true;
        while (q.length > head) {
          const [r, c] = q[head++];
          let cnt = 0;
          for (let j = 0; j < 4; j++) {
            let nr = r + dr[j];
            let nc = c + dc[j];

            if (nr < 0 || nc < 0 || nr >= N || nc >= M) {
              continue;
            }

            // 바다면 cnt ++
            // 이거 비교하는 주위 애들이 계속 최신화 되면 안됨 얕은 복사 하나 따노혹 시자갛자.
            if (nowGrid[nr][nc] === 0) {
              cnt++;
              continue;
            }

            // 방문한 적 있으면 continue
            if (visited[nr][nc] === true) {
              continue;
            }

            q.push([nr, nc]);
            visited[nr][nc] = true;
          }

          // cnt 만큼 빼주고 0보다 작아지면 0으로 만들어준다.
          grid[r][c] -= cnt;
          if (grid[r][c] < 0) {
            grid[r][c] = 0;
          }
        }
      }
    }
  }

  // 여러 덩어리 일 때
  if (section > 1) {
    return console.log(year);
  }

  // 다 녹을 때까지 분리가 안되면
  if (year !== 0 && section === 0) {
    return console.log(0);
  }
  year++;
}
// 시간
// 각 사이클에서 먼저 한 덩어리에서 분리가 되었는지 확인 -> 이거 확인하는게 큐가 필요하겠는데
// visited 배열이 필요. 0이 아닌 곳을 하나씩 방문해서 BFS 하는데 새로운 곳을 방문하는데
// visited가 false인 새로운 곳이 count 되면 끝이겠네

// 각 빙산 지점마다 인접한 0을 카운트 해서 그 수만큼 - 하는데 최소 값은 0임

// 와 이게 각 칸이 10 이하이긴한데
// 빙벽에 둘러쌓여있으면 10년보다 더 걸릴 수 있음.

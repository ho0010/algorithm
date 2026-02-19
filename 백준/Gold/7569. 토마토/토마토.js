let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, M, H] = input[0].split(' ').map(Number);

let index = 1;
const grid = [];

// 3차원 배열 일단 그냥 이름은 grid
for (let h = 0; h < H; h++) {
  const floor = [];

  for (let r = 0; r < M; r++) {
    floor.push(input[index++].split(' ').map(Number));
  }

  grid.push(floor);
}

// 3차원 dist
const dist = [];

for (let h = 0; h < H; h++) {
  dist.push(Array.from({ length: M }, () => Array(N).fill(-1)));
}

let q = [];

// 처음 1인거 집어넣기
for (let h = 0; h < H; h++) {
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[h][r][c] === 1) {
        q.push([h, r, c]);
        dist[h][r][c] = 0;
      }
    }
  }
}

let head = 0;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
const dh = [-1, 1];

while (head < q.length) {
  let [h, r, c] = q[head++];

  // dr,dc
  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];

    // 영역에 벗어남
    if (nr < 0 || nc < 0 || nr >= M || nc >= N) {
      continue;
    }
    // 이미 방문한 곳임
    if (dist[h][nr][nc] !== -1) {
      continue;
    }
    // 근접하지만 익지 않은 토마토
    if (grid[h][nr][nc] === 0) {
      q.push([h, nr, nc]);
      dist[h][nr][nc] = dist[h][r][c] + 1;
    }
  }

  // dh
  for (let i = 0; i < 2; i++) {
    const nh = h + dh[i];

    // 영역에 벗어남
    if (nh < 0 || nh >= H) {
      continue;
    }
    // 이미 방문한 곳임
    if (dist[nh][r][c] !== -1) {
      continue;
    }
    // 근접하지만 익지 않은 토마토
    if (grid[nh][r][c] === 0) {
      q.push([nh, r, c]);
      dist[nh][r][c] = dist[h][r][c] + 1;
    }
  }
}

// 가장 큰 값 찾기
let max = 0;

for (let h = 0; h < H; h++) {
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      // 토마토가 익지 못하는 상황
      if (grid[h][r][c] === 0 && dist[h][r][c] === -1) {
        return console.log(-1);
      }
      // 토마토 없는거는 생략
      if (dist[h][r][c] === -1) {
        continue;
      }
      max = Math.max(max, dist[h][r][c]);
    }
  }
}

console.log(max);

// 시간 20m -> 힌트1 -> 5m
// 발산
// 3차원을 어떻게 표현할 것인가가 중요하다고 판단.
// 이거 표현하는거부터 쉽지 않은데?
// dist 배열이 필요
// 토마토 자체는 전체 돌아서 1인 토마토 들을 q에 집어넣으면 됨.
// 처음에만 1인거 다 집어넣으면 됨.
// 0인거에만 전파
// 토마토가 익지 못하는 경우 -> grid는 0인데, 다 끝나고 dist가 -1이라면

// 수렴
// 토마토 퍼져나가는거는 똑같이 dr dc로 하면되는데 dz 만들어서 해야할 것 같다고 판단.
// for 문을 dz까지 하나 더 만들면 될 듯. 배열에서는 z가 먼저

// 힌트1: 3차원 배열 만드는거 계층별로 잘 생각할 것

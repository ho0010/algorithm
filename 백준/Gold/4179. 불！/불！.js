let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let grid = input.splice(1, N + 1).map((l) => l.split(''));

const distJ = Array.from({ length: N }, () => Array(M).fill(-1));
const distF = Array.from({ length: N }, () => Array(M).fill(-1));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let qJ = [];
let headJ = 0;

let qF = [];
let headF = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === 'J') {
      qJ.push([i, j]);
      distJ[i][j] = 0;
    } else if (grid[i][j] === 'F') {
      qF.push([i, j]);
      distF[i][j] = 0;
    }
  }
}

while (headF < qF.length) {
  let [r, c] = qF[headF++];
  for (let i = 0; i < 4; i++) {
    let nr = r + dr[i];
    let nc = c + dc[i];

    if (nr < 0 || nr >= N || nc < 0 || nc >= M) {
      continue;
    }

    if (grid[nr][nc] !== '#' && grid[nr][nc] !== 'F') {
      qF.push([nr, nc]);
      grid[nr][nc] = 'F';
      distF[nr][nc] = distF[r][c] + 1;
    }
  }
}

let [r, c] = qJ[headJ];
grid[r][c] = 'J';

while (headJ < qJ.length) {
  let [r, c] = qJ[headJ++];
  for (let i = 0; i < 4; i++) {
    let nr = r + dr[i];
    let nc = c + dc[i];

    if (nr < 0 || nr >= N || nc < 0 || nc >= M) {
      continue;
    }
    if (grid[nr][nc] === '#') {
      continue;
    }
    if (grid[nr][nc] === 'J') {
      continue;
    }

    if (distJ[r][c] + 1 < distF[nr][nc] || distF[nr][nc] === -1) {
      qJ.push([nr, nc]);
      grid[nr][nc] = 'J';
      distJ[nr][nc] = distJ[r][c] + 1;
    }
  }
}

let min = Infinity;
// 지훈이가 갈 수 있는 길 중 가장자리 길
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (distJ[i][j] !== -1) {
      if (distF[i][j] === -1 || distJ[i][j] < distF[i][j]) {
        if (i === N - 1 || j === M - 1 || i === 0 || j === 0) {
          min = Math.min(distJ[i][j], min);
        }
      }
    }
  }
}

if (min === Infinity) {
  console.log('IMPOSSIBLE');
} else {
  console.log(min + 1);
}

// 시간

// 발산
// 불 -> BFS
// 지훈이도 BFS로 distance..? 불도 distance 처리해서 불 distance >= 지훈 distance면 안되는거니까 이거 이용하는건가?
// 가장 빠른 탈출시간 = 지훈 distance 배열 중에 벽이 아닌 끝나는 지점 중에 가장 작은 값

// 수렴
// 각각 BFS 돌려서 Distance 구하기
// 불 distance >= 지훈 distance 이 부분은 제외
// 지훈 Dist 중에 경계에 맞닿아 있는 부분 중 min을 구하면 됨
// 경계에 맞닿아 있는 부분이 없다면 IMPOSSIBLE
// -1이 아닌 값 중 가장 자리인 값들 중 min 구해서 +1

// 불을 먼저 돌렸으니까 지훈이가 돌릴 때 불이 이미 있는 곳이면 못가게 해야겠는데?

// 힌트1: 탈출 조건 우 하단만 고려 좌 상단 즉 0 도 있음
// 힌트2: 불이 닿지 않는 곳 -1 인데 지훈이의 이동 조건은 distJ[r][c] + 1 < distF[nr][nc]
// 즉 불이 완전 닿지 않는 곳으로 안전한 distF[nr][nc] === -1 를 빼먹었음
// 마지막 계산에서도 불이 완전 닿지 않는 곳 즉 distJ[i][j] < distF[i][j] 이 조건은 disF가 -1일 때를 생각 안한거라 문제임

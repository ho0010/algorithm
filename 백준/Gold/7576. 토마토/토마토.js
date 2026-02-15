let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [M, N] = input[0].split(' ').map(Number);
let grid = input.splice(1, N).map((l) => l.split(' ').map(Number));
let dist = Array.from({ length: N }, () => Array(M).fill(-1));

let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];

let q = [];
let head = 0;

let zeroTomato = 0;
let day = 0;

// 초기 1 값 큐에 넣기 & 0인 값 세기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === 1 && dist[i][j] === -1) {
      q.push([i, j]);
      dist[i][j] = 0;
    }
    if (grid[i][j] === 0) {
      zeroTomato++;
    }
  }
}

if (zeroTomato === 0) {
  return console.log(0);
}

while (head < q.length) {
  // 델타 수행
  let [r, c] = q[head++];
  for (let i = 0; i < 4; i++) {
    let nr = r + dr[i];
    let nc = c + dc[i];

    if (nr < 0 || nr >= N || nc < 0 || nc >= M) {
      continue;
    }

    if (grid[nr][nc] === 0) {
      grid[nr][nc] = 1;
      dist[nr][nc] = dist[r][c] + 1;
      day = dist[nr][nc];
      zeroTomato--;
      q.push([nr, nc]);
    }
  }
}

if (zeroTomato > 0) {
  return console.log(-1);
}

console.log(day);

// 50m -> 50m(힌트 1,2 접수) ->
// 시작점이 여러 곳이다 -> 모든 좌표에 대해 실행해야 한다.
// 시작점이 여러 곳이지만 dist가 필요한 건 맞지 않나?

// 일단 종료 조건이 어렵다.
// 0, minDay, -1

// 모든 좌표중에 1인 곳에서 동시적으로 시작 -> 이게 한 사이클이 되어야 할 듯 -> 근데 이거 가능은 함?

// 모든 좌표를 순회하는데 1인걸 큐에 다 넣고 델타 돌리면 그게 싸이클, 주변 값은 0일 때 1로 바꾸면 됨.
// 해당 값이 0일때 이전 값보다 1 더하는 방식으로 최소값을 만들면 됨 -> 따로 배열이 필요함.
// (가장 먼저 확인) 처음 스캔 떴는데 0인 토마토가 없으면 0 출력
// BFS 다 끝났는데 0이 남아있으면 -1 출력 ->  다 끝난걸 어캐 알지? 돌렸다는 배열도 필요할까?, 이미 방문한 곳이 아닐 때 스택에 쌓으면 되긴할 듯

// 그럼 일단 최초 입력 배열 (0->1로 바뀜, 이게 사실상 방문 배열 아닌가? 일단 OK), 최솟 값 배열

// pbl1: 한 사이클 큐에 넣고 델타 돌리는건 OK 근데 코드 구현이 안됨..

// 힌트 1: 초기 1값만 넣으면 된다.
// 힌트 2: 안 익은 토마토의 개수를 미리 세놓으면 종료 조건 처리가 쉽다.

// 생각해보니 큐에 넣는거라서 FIFO임 그래서 day 별로 처리가 되는데.. 이걸 생각 못했네
// 안 익은 토마토 개수 세놓는게 킥이긴함.

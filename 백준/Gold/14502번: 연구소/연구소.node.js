const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let map = Array.from({ length: N }, () => []);
let tempMap = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  let inputRow = input[i + 1].split(' ');
  for (let j = 0; j < M; j++) {
    map[i][j] = inputRow[j];
  }
}

let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];
let result = 0;

function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (tempMap[nx][ny] == 0) {
      tempMap[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

function dfs(count) {
  if (count == 3) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        tempMap[i][j] = map[i][j];
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (tempMap[i][j] == 2) {
          virus(i, j);
        }
      }
    }
    result = Math.max(result, getScore());
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] == 0) {
        map[i][j] = 1;
        dfs(count + 1);
        map[i][j] = 0;
      }
    }
  }
}

function getScore() {
  let score = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tempMap[i][j] == 0) {
        score++;
      }
    }
  }
  return score;
}

dfs(0);
console.log(result);

// 모든 경우의 수에 대해서 벽을 세우고 안전지대 개수를 센다..?
// 바이러스를 퍼지게 하는것을 DFS로 실행 (힌트)

// step1: 모든 경우의 수로 벽 세우기 -> 근데 벽도 DFS로 세워야 하는데 -> 이 로직이 좀 어려움
// step2: 바이러스 퍼뜨리기 -> 이거 dx, dy로 체크하는거 유용한 것 같음
// step3: 0 개수 세기
// 최댓값 계산하기

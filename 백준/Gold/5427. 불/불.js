let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let index = 1;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const answer = [];

for (let i = 0; i < T; i++) {
  let [M, N] = input[index++].split(' ').map(Number);
  let grid = input.slice(index, index + N).map((l) => l.split(''));
  index += N;

  let distF = Array.from({ length: N }, () => Array(M).fill(Infinity));

  let qF = [];
  let headF = 0;

  // 처음 불 찾아서 q에 push
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (grid[j][k] === '*') {
        qF.push([j, k]);
        distF[j][k] = 0;
      }
    }
  }

  // 불 전체 전파
  while (headF < qF.length) {
    let [r, c] = qF[headF++];

    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];

      // 범위를 벗어남
      if (nr < 0 || nc < 0 || nr >= N || nc >= M) {
        continue;
      }

      // 방문하지 않았고 벽이 아닌 곳에는 전파 가능
      if (distF[nr][nc] === Infinity && grid[nr][nc] !== '#') {
        distF[nr][nc] = distF[r][c] + 1;
        qF.push([nr, nc]);
      }
    }
  }

  let distS = Array.from({ length: N }, () => Array(M).fill(-1));
  let qS = [];
  let headS = 0;

  let answerNow = -1;

  // 처음 상근 찾아서 q에 push
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (grid[j][k] === '@') {
        qS.push([j, k]);
        distS[j][k] = 0;
      }
    }
  }

  while (headS < qS.length) {
    let [r, c] = qS[headS++];

    // 상근이가 탈출 가능함.
    if (r === 0 || c === 0 || r === N - 1 || c === M - 1) {
      answerNow = distS[r][c] + 1;
      answer.push(answerNow);
      break;
    }

    for (let i = 0; i < 4; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];

      // 범위를 벗어남
      if (nr < 0 || nc < 0 || nr >= N || nc >= M) {
        continue;
      }

      // 방문하지 않았고 벽이 아니고 불이 전파되지 않은 곳은 이동 가능
      if (distS[nr][nc] === -1 && grid[nr][nc] === '.' && distS[r][c] + 1 < distF[nr][nc]) {
        distS[nr][nc] = distS[r][c] + 1;
        qS.push([nr, nc]);
      }
    }
  }
  if (answerNow === -1) {
    answer.push('IMPOSSIBLE');
  }
}

console.log(answer.join('\n'));

// 시간

// 발산
// 불 dist 먼저 돌리고 그거 기반으로 상근이가 이동하면 되지 않나?
// 벽 가장자리에 가장 먼저 닿았을 때 +1 하고 return
// 벽 가장자리에 닿지 못하고 모든 q를 꺼내 쓰면 impossible 출력
// 정답 배열에 넣어야겠네 출력하려면 하나씩 하면 불리함
// 상근이가 이동할 수 있는 규칙
// 방문하지 않은곳, 상근 dist < 불 dist, 벽이 아닌곳

// 수렴

// splice() => 원본 배열 삭제됨 그리고 두번째 인자는 count 즉 개수임.

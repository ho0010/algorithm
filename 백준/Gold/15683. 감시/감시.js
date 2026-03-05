let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let grid = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));
let target = [];

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

// cctv 좌표 수집
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] !== 0 && grid[i][j] !== 6) {
      target.push([i, j]);
    }
  }
}

// 모든 경우의 수 방문

// 순서대로 방향이 쌓임
let stack = [];

let answer = Infinity;

function sol(k) {
  if (k === target.length) {
    // cctv 방향 적용
    let newDirection = grid.map((l) => [...l]);
    let cnt = 0;

    for (let j = 0; j < target.length; j++) {
      let [x, y] = target[j];

      // cctv 작동
      if (grid[x][y] === 1) {
        newDirection = cctv(newDirection, [x, y], stack[j]);
      } else if (grid[x][y] === 2) {
        newDirection = cctv(newDirection, [x, y], stack[j]);
        newDirection = cctv(newDirection, [x, y], (stack[j] + 2) % 4);
      } else if (grid[x][y] === 3) {
        newDirection = cctv(newDirection, [x, y], stack[j]);
        newDirection = cctv(newDirection, [x, y], (stack[j] + 1) % 4);
      } else if (grid[x][y] === 4) {
        newDirection = cctv(newDirection, [x, y], stack[j]);
        newDirection = cctv(newDirection, [x, y], (stack[j] + 1) % 4);
        newDirection = cctv(newDirection, [x, y], (stack[j] + 2) % 4);
      } else if (grid[x][y] === 5) {
        newDirection = cctv(newDirection, [x, y], stack[j]);
        newDirection = cctv(newDirection, [x, y], (stack[j] + 1) % 4);
        newDirection = cctv(newDirection, [x, y], (stack[j] + 2) % 4);
        newDirection = cctv(newDirection, [x, y], (stack[j] + 3) % 4);
      }
    }

    // 카운팅
    for (let a = 0; a < N; a++) {
      for (let b = 0; b < M; b++) {
        if (newDirection[a][b] === 0) {
          cnt++;
        }
      }
    }
    answer = Math.min(cnt, answer);

    return;
  }

  // 재귀로 모든 경우의 수 탐색
  for (let i = 0; i < 4; i++) {
    stack.push(i);
    sol(k + 1);
    stack.pop();
  }
}

// 좌표랑 방향 주면 그 방향으로 전부 cctv 적용하는 함수 필요
function cctv(newDirection, position, direction) {
  let [r, c] = position;

  while (1) {
    r += dr[direction];
    c += dc[direction];

    // 범위 끝
    if (r < 0 || c < 0 || r >= N || c >= M) {
      break;
    }
    // 벽 끝
    if (grid[r][c] === 6) {
      break;
    }
    newDirection[r][c] = '#';
  }

  return newDirection;
}

sol(0);

console.log(answer);

// 발산
// 최대 8*8이고 cctv가 8개니까 4의 8승 16의 4승 256의 제곱 -> 충분함
// 각 cctv가 비출 수 있는 모든 경우의 수를 비춘 다음에 그 중 0이 최소인 값을 return
// 모든 경우의 수 마다 배열을 새롭게 만들면 메모리 괜찮나? 크기가 작아서 괜찮을 것 같은데..

// cctv의 모든 경우를 돌려볼 수 있는 방법?
// 방향 4가지를 정의해서 모든 경우 -> 백트래킹과 비슷한 for문으로 처리 가능할 것 같은데

// cctv 개수를 센다. 그 cctv 개수 만큼 수행하게 끔 한다.
// 방향 지정을 for문으로 나타낼 수 있다고 판단.
// 배열에 전부 넣는다. 그 배열의 좌표를 계속 반복
// 기본값 0주고, 12시부터 시계방향 0 -> 1 -> 2 -> 3

// target의 방향을 하나씩만 바꿔 사각지대 개수 세는 로직을 실행

// 전체 경우의 수 돌리는걸 어캐하지?
// for문이 아니라 재귀를 이용해보자

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M, K] = input[0].split(' ').map(Number);

let grid = Array.from({ length: N }, () => Array(M).fill(0));

let index = 1;

// 스티커 붙이기 K개 시도
for (let i = 0; i < K; i++) {
  // 스티커 정보 뽑기
  let stk = [];
  let [R, C] = input[index++].split(' ').map(Number);
  stk = input.slice(index, index + R).map((l) => l.split(' ').map(Number));
  index += R;

  let flag = false;

  // 스티커 4방향
  for (let c = 0; c < 4; c++) {
    let newStk = [];
    if (flag) {
      break;
    }
    // 스티커 돌리기
    if (c === 0) {
      newStk = [...stk.map((l) => [...l])];
    } else if (c === 1) {
      newStk = Array.from({ length: C }, () => Array(R).fill(0));
      for (let x = 0; x < R; x++) {
        for (let y = 0; y < C; y++) {
          if (stk[x][y] === 1) {
            newStk[y][R - x - 1] = 1;
          }
        }
      }
    } else if (c === 2) {
      newStk = Array.from({ length: R }, () => Array(C).fill(0));
      for (let x = 0; x < R; x++) {
        for (let y = 0; y < C; y++) {
          if (stk[x][y] === 1) {
            newStk[R - x - 1][C - y - 1] = 1;
          }
        }
      }
    } else if (c === 3) {
      newStk = Array.from({ length: C }, () => Array(R).fill(0));
      for (let x = 0; x < R; x++) {
        for (let y = 0; y < C; y++) {
          if (stk[x][y] === 1) {
            newStk[C - y - 1][x] = 1;
          }
        }
      }
    }

    // 스티커 붙이기
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (flag) {
          continue;
        }

        // 스티커 붙일 수 있는지 확인
        if (sol(j, k, newStk)) {
          for (let a = 0; a < newStk.length; a++) {
            for (let b = 0; b < newStk[0].length; b++) {
              if (newStk[a][b] === 1) {
                grid[j + a][k + b] = 1;
              }
            }
          }
          // 붙이면 해당 스티커는 끝
          flag = true;
        }
      }
    }
  }
}

// 스티커 카운트
let cnt = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === 1) {
      cnt++;
    }
  }
}

console.log(cnt);

function sol(j, k, stk) {
  let R = stk.length;
  let C = stk[0].length;

  // 스티커가 노트북 범위를 빠져나가는지
  if (j + R > N || k + C > M) return false;

  for (let a = 0; a < R; a++) {
    for (let b = 0; b < C; b++) {
      // 스티커가 있는데 노트북에도 이미 색칠되어 있다면
      if ((stk[a][b] === 1) & (grid[a + j][b + k] === 1)) {
        return false;
      }
    }
  }
  return true;
}

// 90m

// 문제
// 위쪽 먼저 그다음 왼쪽
// 붙일 곳이 없다면 시계방향으로 회전하고 위 과정 반복
// 4방향 다 돌렸는데 못 붙이면 버리기

// 수렴
// 스티커 순서대로 붙이는 시도하기
// 0,0 부터 시도하고 붙여지면 끝 -> 스티커에서 1인 값을 노트북에서 붙일 수 있는지 다 확인
// 못 붙이면 C 부터 이동하며 계속 시도 -> 크기에 따라 벗어나면 R 변화해서 다시 돌리기
// 전부 못붙이면 회전 -> 회전이 킥인 것 같은데 이거 진짜 전환시키는게 아니라 R,C 잘 돌리면 될 것 같은데 반복문에서
// 회전도 다 했는데 못붙이면 그냥 넘어가

// 처음 노트북 grid에서 1인 값 count

// 1. 스티커의 투명한 0을 고려하지 않음. 스티커의 투명한 0 은 노트북에 스티커가 있어도 괜찮기 때문
// 2. 스티커의 위치에 맞는 grid 위치에 색칠해야 했음. 이건 그냥 생각을 잘못한듯
// 3. 180도 회전은 좌우 거울이 아니라 완전 반전임.

// 빼먹은 거 없이 구현을 잘 해야하는데 이러려면 처음에 설계를 잘 해야 할듯

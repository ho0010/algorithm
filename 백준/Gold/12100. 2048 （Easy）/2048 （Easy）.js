let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let grid = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));

let every = [];
let stack = [];

// 모든 경우의 수를 담은 배열 만들기
function sol(k) {
  // base
  if (stack.length === 5) {
    every.push([...stack]);
    return;
  }

  for (let i = 0; i < 4; i++) {
    stack.push(i);
    sol(k + 1);
    stack.pop();
  }
}
sol(0);

// 회전 함수
function rotate(arr) {
  const R = arr.length;
  const C = arr[0].length;
  let rotated = Array.from({ length: C }, () => Array(R).fill(0));

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      rotated[c][R - 1 - r] = arr[r][c];
    }
  }
  return rotated;
}

// 밀기 함수
function push(nowGrid, direction) {
  // 방향 처리
  if (direction === 1) {
    nowGrid = rotate(nowGrid);
  } else if (direction === 2) {
    nowGrid = rotate(nowGrid);
    nowGrid = rotate(nowGrid);
  } else if (direction === 3) {
    nowGrid = rotate(nowGrid);
    nowGrid = rotate(nowGrid);
    nowGrid = rotate(nowGrid);
  }

  // 합쳐진 함수인지 체크하는 grid
  let checked = Array.from({ length: N }, () => Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      // 빈칸은 밀 필요 없음
      if (nowGrid[i][j] === 0) continue;
      // 체킹할 위치
      let k = j - 1;
      while (k >= 0) {
        // 비었으니 이동
        if (nowGrid[i][k] === 0) {
          // 오류: j가 아니라 내 바로 뒷칸에서 끌고 와야 함.
          nowGrid[i][k] = nowGrid[i][k + 1];
          nowGrid[i][k + 1] = 0;
          // 현재 위치가 checked 라면 즉 이미 합쳐진 함수라면 그 합쳐졌다는 표시도 옮겨 주어야 한다.
          if (checked[i][j] === true) {
            checked[i][j] = false;
            checked[i][k] = true;
          }
        } // 숫자가 같고 타겟이 합쳐진적 없음
        else if (nowGrid[i][k] === nowGrid[i][k + 1] && !checked[i][k]) {
          nowGrid[i][k] *= 2;
          nowGrid[i][k + 1] = 0;
          checked[i][k] = true;
          break; // 합쳐졌으면 더 전진할 수 없음
        } else {
          break;
        }

        k--;
      }
    }
  }

  return nowGrid;
}

let max = 0;

// 모든 경우의 수 실행
for (let i = 0; i < every.length; i++) {
  let now = every[i];
  let nowGrid = grid.map((l) => [...l]);

  // 5번 기울이기 실행
  for (let j = 0; j < 5; j++) {
    nowGrid = push(nowGrid, now[j]);
  }

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      max = Math.max(max, nowGrid[x][y]);
    }
  }
}

console.log(max);

// 발산
// 각 방향으로 기울인다. 모든 경우의 수를 돌려봐서 가장 큰 값을 뽑아내면 됨.
// 근데 한 번 기울였을 때 변화가 있으면 계속 가는거지만 없으면 더 이상 그 경우의 수는 시도 X

// push(grid, direction) -> 배열 리턴
// grid랑 방향 주어졌을 때 그 방향으로 기울이기해서 결과 grid 반환

// 모든 경우의 수 시도하기
// 이건 쉬움 -> 백 트래킹?

// 왼쪽으로 미는 것부터 생각해보자
// 가장 왼쪽에서 하나 오른쪽 칸부터 끝까지 검사
// 그 칸의 왼쪽에 블록을 만날 때까지 스캔하다가 만났고 크기가 같으면 둘 다 지우고 그 자리에 더한 값 입력
// 그리고 합쳐지더라도 그 방향으로 계속 갈 수 있어야 함.
// 그리고 한 번의 이동에서 합쳐진 블록은 다시 합쳐질 수 없기에 체킹을 따로 해줘야 함.
// 체킹 배열도 필요할 듯

// 근데 이거 전부 회전시켜서 처리할 까? 방향마다 로직을 다르게 짜는게 더 힘들 것 같은데

// 80m 풀이 후 테케 통과 했고 추가 테케 3개도 통과했는데 실패함..

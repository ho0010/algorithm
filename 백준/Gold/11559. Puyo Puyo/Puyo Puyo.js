let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let grid = input.slice(0, 12).map((l) => [...l]);

let cnt = 0;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

while (1) {
  let beforeCnt = cnt;

  let newGrid = grid.map((l) => [...l]);

  grid = sol(newGrid);
  // 연쇄반응이 없었던 것
  if (cnt === beforeCnt) {
    break;
  }
}

function sol(newGrid) {
  let dist = Array.from({ length: 12 }, () => Array(6).fill(-1));
  let flag = false;

  // 한 사이클
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      // 빈 공간이면 pass
      if (newGrid[i][j] === '.') {
        continue;
      }
      // 방문한 적 있으면 pass
      if (dist[i][j] !== -1) {
        continue;
      }

      // dist 채우기
      let q = [];
      let head = 0;

      q.push([i, j]);
      dist[i][j] = 1;

      let color = newGrid[i][j];
      let colorCnt = 1;

      while (q.length > head) {
        const [r, c] = q[head++];

        for (let x = 0; x < 4; x++) {
          let nr = r + dr[x];
          let nc = c + dc[x];

          // 범위 벗어남
          if (nr < 0 || nc < 0 || nr >= 12 || nc >= 6) {
            continue;
          }

          // 방문한 적 있으면 pass
          if (dist[nr][nc] !== -1) {
            continue;
          }

          // 색이 같을 때
          if (color === newGrid[nr][nc]) {
            dist[nr][nc] = dist[r][c] + 1;
            q.push([nr, nc]);
            colorCnt++;
          }
        }
      }
      head = 0;

      // 4개이상 있다면 연쇄 작용과 flag true
      if (colorCnt >= 4) {
        while (q.length > head) {
          const [r, c] = q[head++];
          newGrid[r][c] = '.';
        }
        flag = true;
      }
    }
  }
  // 한 번이라도 터졌으면 +1
  if (flag) {
    cnt++;
  }

  // 아래로 정렬
  for (let i = 0; i < 6; i++) {
    let stack = [];
    for (let j = 0; j < 12; j++) {
      // 컬럼 단위로 보면서 뽑아내기
      if (newGrid[j][i] !== '.') {
        stack.push(newGrid[j][i]);
        newGrid[j][i] = '.';
      }
    }
    // 컬럼에 색이 없으면 pass
    if (stack.length === 0) {
      continue;
    }
    // 아래부터 집어 넣기
    for (let k = 0; k < stack.length; k++) {
      newGrid[12 - k - 1][i] = stack[stack.length - k - 1];
    }
  }

  return newGrid;
}

console.log(cnt);

// 뿌요들이 없어지면 1연쇄, 여러 그룹이 한 번에 터지면 그것도 1연쇄로 처리

// 배열을 받고 거기서 연쇄 작업을 확인해 처리해주고 결과물 배열을 반환하는 함수
// flag 하나 세워서 연쇄가 터지지 않으면 끝내는 걸로

// 배열 하나 카피해두고 그 카피 배열에서 모든 좌표를 돌며 .이 아닌게 오면 BFS 처리
// cnt가 4가 되면 카피배열에서 .으로 다 바꾸고 나머지 좌표들도 마저 진행
// 다 돌면서 연쇄 카운트 하고 배열 아래로 밀기

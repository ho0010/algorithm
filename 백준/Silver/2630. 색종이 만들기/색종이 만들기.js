let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let grid = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));

let white = 0;
let blue = 0;

function sol(r, c, size) {
  // base
  if (size < 1) {
    return;
  }

  let num = grid[r][c];

  // 특정 영역에서 모두 같은 값인지 검사
  for (let i = r; i < r + size; i++) {
    for (let j = c; j < c + size; j++) {
      if (num !== grid[i][j]) {
        let newSize = size / 2;

        // 이미 같은 값이 아니라서 재귀 호출하는 것
        for (let x = 0; x < 2; x++) {
          for (let y = 0; y < 2; y++) {
            sol(r + newSize * x, c + newSize * y, newSize);
          }
        }
        return;
      }
    }
  }

  // 같은 값이라서 해당 값 ++;
  if (num === 0) {
    white++;
  } else if (num === 1) {
    blue++;
  }
}

sol(0, 0, N);

console.log(white);
console.log(blue);

// 재귀 인식: 등분해서 반복적으로 이루어진다는 것으로 인식 가능, 잘라서 넘겨주면 되네 카운팅 적절히 하고
// 함수 정의: 영역 시작과 사이즈를 받아서 색종이 개수를 카운트
// base: 사이즈가 1보다 작으면 그냥 리턴
// 재귀: 인자로 받은 정보를 바탕으로 영역 전체가 같은 값으로 이루어져있다면 해당 값 ++
// 아니라면 4등분 해서 재귀에 넘기기

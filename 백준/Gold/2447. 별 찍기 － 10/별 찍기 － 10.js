let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);

let grid = Array.from({ length: N }, () => Array(N).fill(' '));

function sol(r, c, size) {
  // base
  if (size === 3) {
    for (let x = r; x < r + 3; x++) {
      for (let y = c; y < c + 3; y++) {
        if (x === r + 1 && y === c + 1) {
          continue;
        }
        grid[x][y] = '*';
      }
    }
    return;
  }

  let halfSize = size / 3;

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (x === 1 && y === 1) {
        continue;
      }
      sol(r + x * halfSize, c + y * halfSize, halfSize);
    }
  }
}
sol(0, 0, N);

console.log(grid.map((row) => row.join('')).join('\n'));
// 재귀 인식: 문제에서도 그렇고 9분할 -> 9분할 규칙을 보면 재귀임 그냥
// 함수 정의: r,c,size를 받아 전체를 9분할로 나누고 가운데는 비도록 하고 나머지는 재귀 호출
// base: row size < 3 return
// 재귀: 함수 정의처럼 간단하기는 한데 이거 정답 배열 만드는게 쉽지 않겠다.
// 처음 크기만큼 빈 배열을 만들어놓고 각 인덱스에 별을 채우면 어떨까

// 처음에 비워놓고 별을 찍으려면 base 조건이 달라야한다고 생각
// size가 3일때만 별을 찍자.

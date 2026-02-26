let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);

let grid = Array.from({ length: N }, () => Array(N * 2 - 1).fill(' '));

function sol(r, c, size) {
  // base
  if (size === 3) {
    grid[r][c] = '*';
    grid[r + 1][c - 1] = '*';
    grid[r + 1][c + 1] = '*';
    grid[r + 2][c - 2] = '*';
    grid[r + 2][c - 1] = '*';
    grid[r + 2][c] = '*';
    grid[r + 2][c + 1] = '*';
    grid[r + 2][c + 2] = '*';

    return;
  }

  let halfSize = size / 2;
  sol(r, c, halfSize);
  sol(r + halfSize, c + halfSize, halfSize);
  sol(r + halfSize, c - halfSize, halfSize);
}
sol(0, N - 1, N);

console.log(grid.map((row) => row.join('')).join('\n'));

// 재귀 인식: 이것도 분할 정복인 듯 즉, 재귀
// 함수 정의: r,c,size 받아서 별찍기 다 비워놓고 조건에 맞는 부분에 별 찍기
// base: size가 3일때 쇼부
// 재귀: 0, size/2 | size/2+1, size/4 | size/2+1, size*3/4

// 시작점을 왼쪽 끝으로 잡으면 불일치가 생김..

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let grid = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));

let zero = 0;
let one = 0;
let NOne = 0;

function sol(r, c, size) {
  // base
  if (size < 1) {
    return;
  }

  let num = grid[r][c];

  for (let i = r; i < r + size; i++) {
    for (let j = c; j < c + size; j++) {
      if (num !== grid[i][j]) {
        let newSize = size / 3;
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            sol(r + x * newSize, c + y * newSize, newSize);
          }
        }
        return;
      }
    }
  }
  if (num === 0) {
    zero++;
  } else if (num === 1) {
    one++;
  } else if (num === -1) {
    NOne++;
  }
}

sol(0, 0, N);

console.log(NOne);
console.log(zero);
console.log(one);

// 시간
// 재귀 발견: n=k 개수를 구할 때 n=k-1 을 활용할 수 있다.
// 함수 정의: 인자로 배열을 받고, 그 배열에서 각 개수로 채워진 종이의 개수를 카운트하는 함수
// base: r이 1보다 작으면 끝
// 재귀 식: 배열의 모든 값이 같으면 그 숫자를 카운트해서 끝.
// 아니라면 r/3 해서 각각 재귀 호출.

// 힌트 1
// 다 좋은데 배열 자체를 넘긴다는건 별로 좋은 생각이 아님.
// 배열을 잘라서 넘기는 것 자체가 시간 복잡도가 높음
// 영역을 나누어서 해결할 것

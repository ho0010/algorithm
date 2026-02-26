let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let grid = input.slice(1, N + 1).map((l) => l.split('').map(Number));

let stack = [];

function sol(r, c, size) {
  // base
  if (size < 1) {
    return;
  }
  let num = grid[r][c];

  // 전체 값이 같은지 파악
  for (let i = r; i < r + size; i++) {
    for (let j = c; j < c + size; j++) {
      // 다르면 재귀 호출
      if (num !== grid[i][j]) {
        let halfSize = size / 2;
        stack.push('(');

        for (let x = 0; x < 2; x++) {
          for (let y = 0; y < 2; y++) {
            sol(r + halfSize * x, c + halfSize * y, halfSize);
          }
        }
        stack.push(')');

        return;
      }
    }
  }

  stack.push(num);
}

sol(0, 0, N);

console.log(stack.join(''));

// 재귀 인식: 반복적으로 4분할을 하고 그걸 이어간다는게 재귀, 근데 n=k-1을 알면 n=k를 안다와는 조금 다르지 않나?
// 함수 정의: 인자로 영역의 시작과 사이즈를 받는다. 압축할 수 있으면 압축한다.
// base: size가 1보다 작으면 끝
// 재귀: 모든 범위에 있는 값이 같은 값이면 그 값을 스택에 push
// 아니라면 여는 괄호 push -> 재귀 호출 -> 닫는 괄호 push

// 이 문제의 차이점은 결국 값을 어떻게 표현할 것 인가?
// 편하게 출력 양식에 맞게 만드려면 자료구조를 사용해야할지도?
// 느낌상으로 스택인 것 같은데 재귀 호출할 때 괄호 열고 나중에 괄호를 닫는?

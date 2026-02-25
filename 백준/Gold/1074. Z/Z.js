let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [n, r, c] = input[0].split(' ').map(Number);

let cnt = 0;

function sol(n, r, c) {
  if (n === 0) {
    console.log(cnt);
    return 0;
  }
  let half = 2 ** n / 2;
  // 1
  if (r < half && c < half) {
    sol(n - 1, r, c);
  }
  // 2
  else if (r < half && c >= half) {
    cnt += half * half;
    sol(n - 1, r, c - half);
  } // 3
  else if (r >= half && c < half) {
    cnt += 2 * half * half;
    sol(n - 1, r - half, c);
  } // 4
  else if (r >= half && c >= half) {
    cnt += 3 * half * half;
    sol(n - 1, r - half, c - half);
  }
}

sol(n, r, c);

// n = k 일때를 구할 때 n=k-1 때를 활용할 수 있겠다 -> 재귀적 사고
// 함수 정의: 2^n * 2^n 배열에서 r,c를 방문하는 순서를 반환하는 함수를 만든다.
// base condition: n=0 일때 0 리턴
// 재귀 식: 1,2,3,4 사분면으로 나누어 생각

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [A, B, C] = input[0].split(' ').map(BigInt);

function sol(a, b, c) {
  if (b === 1n) {
    return a % c;
  }

  let half = sol(a, b / 2n, c);

  let pro = (half * half) % c;

  if (b % 2n === 0n) {
    return pro;
  } else {
    return (pro * a) % c;
  }
}

console.log(sol(A, B, C).toString());

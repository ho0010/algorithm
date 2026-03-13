let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let arr = input.slice(1, T + 1).flatMap((l) => l.split(' ').map(Number));

for (let num of arr) {
  let d = Array(num + 5).fill(0);
  d[1] = 1;
  d[2] = 1;
  d[3] = 1;
  d[4] = 2;
  d[5] = 2;

  for (let i = 6; i <= num; i++) {
    d[i] = d[i - 1] + d[i - 5];
  }

  console.log(d[num]);
}

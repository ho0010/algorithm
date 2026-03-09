let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = input[0].split(' ').map(Number);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(BigInt(input[i]));
}

arr.sort((x, y) => (x < y ? -1 : x > y ? 1 : 0));

let cnt = 0;
let mxcnt = 0;
let mxval = arr[0];

for (let i = 0; i < N; i++) {
  if (i === 0 || arr[i - 1] === arr[i]) {
    cnt++;
  } else {
    if (cnt > mxcnt) {
      mxcnt = cnt;
      mxval = arr[i - 1];
    }
    cnt = 1;
  }
}

if (cnt > mxcnt) {
  mxval = arr[N - 1];
}

console.log(mxval.toString());

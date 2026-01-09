let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let k = 0;
let last = 0;
let arr = [];
let answer = [];

for (let i = 1; i <= N; i++) {
  k = Number(input[i]);
  if (last < k) {
    while (last < k) {
      answer.push('+');
      last++;
      arr.push(last);
    }
    arr.pop();
    answer.push('-');
  } else {
    if (arr[arr.length - 1] !== k) {
      console.log('NO');
      return;
    }
    arr.pop();
    answer.push('-');
  }
}

answer.map((a) => {
  console.log(a);
});

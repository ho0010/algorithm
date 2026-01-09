let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);

let k = 0;
let answerArr = [];
let answer = 0;
for (let i = 1; i <= N; i++) {
  k = Number(input[i]);
  if (k === 0) {
    answerArr.pop();
  } else {
    answerArr.push(k);
  }
}

answerArr.forEach((n) => {
  answer += n;
});

console.log(answer);
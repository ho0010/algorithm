let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ');

let targetArr = [];
let answerArr = [];
let answer = '<';
let index = M - 1;
for (let i = 1; i <= N; i++) {
  targetArr.push(i);
}
for (let i = 1; i <= N; i++) {
  answerArr.push(targetArr[index]);
  targetArr.splice(index, 1);
  index += M - 1;
  index %= targetArr.length;
}

for (let i = 1; i <= N; i++) {
  answer += answerArr[i - 1];
  if (i != N) {
    answer += ', ';
  }
}
answer += '>';
console.log(answer);
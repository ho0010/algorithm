const { count } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let meetingArr = [];
let answer = 1;
let cur = 0;

for (let i = 0; i < N; i++) {
  meetingArr.push(input[i + 1].split(' ').map(Number));
}

meetingArr.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

for (let i = 1; i < N; i++) {
  if (meetingArr[i][0] >= meetingArr[cur][1]) {
    answer++;
    cur = i;
  }
}

console.log(answer);

// 첫번째의 끝나는 시간보다 이번 회의의 시작 시간이 같거나 커야함
// count ++, cur = 끝시간

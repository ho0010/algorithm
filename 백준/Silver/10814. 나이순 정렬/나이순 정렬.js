let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let arr = [];
for (let i = 1; i < n + 1; i++) {
  arr.push(input[i].split(' '));
}

arr = arr.map((item, index) => [...item, index]);

arr.sort((a, b) => {
  if (Number(a[0]) !== Number(b[0])) {
    return Number(a[0]) - Number(b[0]);
  } else return a[2] - b[2];
});

let answer = '';

arr.map((item) => {
  answer += item[0] + ' ' + item[1] + '\n';
});

console.log(answer);

// 인덱스를 넣어서 가입 순서를 함께 저장
// 나이순으로 그리고 가입 순서 순으로 정렬
// 출력

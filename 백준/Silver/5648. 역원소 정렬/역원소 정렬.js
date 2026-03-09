let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let arr = input.slice(0, input.length).map((l) => l.split(' '));

// 문자열 입력
let numArr = [];
let isFirst = true;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === '') {
      continue;
    }

    if (isFirst) {
      isFirst = false;
      continue;
    }
    numArr.push(arr[i][j]);
  }
}

let answer = [];

for (let i = 0; i < numArr.length; i++) {
  let reversedStr = numArr[i].split('').reverse().join('');
  answer.push(Number(reversedStr));
}

answer.sort((a, b) => a - b);

console.log(answer.join('\n'));

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let row = '';
let arr = [];
let head = 0;
let tail = 0;
let answerArr = [];
let size = 0;

for (let i = 1; i <= N; i++) {
  row = input[i];
  size = tail - head;
  if (row.slice(0, 4) == 'push') {
    arr[tail] = Number(row.slice(5));
    tail++;
  } else if (row == 'front') {
    if (tail == head) {
      answerArr.push(-1);
    } else {
      answerArr.push(arr[head]);
    }
  } else if (row == 'back') {
    if (tail == head) {
      answerArr.push(-1);
    } else {
      answerArr.push(arr[tail - 1]);
    }
  } else if (row == 'pop') {
    if (tail == head) {
      answerArr.push(-1);
    } else {
      answerArr.push(arr[head]);
      head++;
    }
  } else if (row == 'size') {
    answerArr.push(size);
  } else {
    if (size == 0) {
      answerArr.push(1);
    } else {
      answerArr.push(0);
    }
  }
}

console.log(answerArr.join('\n'));

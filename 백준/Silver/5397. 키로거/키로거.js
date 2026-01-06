let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  let arr = input[i].split('');
  let leftArr = [];
  let rightArr = [];
  let answer = '';
  let string = '';

  arr.map((a) => {
    if (a === '<') {
      if (leftArr.length) {
        string = leftArr.pop();
        rightArr.push(string);
      }
    } else if (a === '>') {
      if (rightArr.length) {
        string = rightArr.pop();
        leftArr.push(string);
      }
    } else if (a === '-') {
      leftArr.pop();
    } else {
      leftArr.push(a);
    }
  });
  answer = leftArr.join('') + rightArr.reverse().join('');
  console.log(answer);
}
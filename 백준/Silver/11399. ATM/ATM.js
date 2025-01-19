let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);
let count = 0;
let answer = 0;

arr.sort((a, b) => a - b);

for (const num of arr) {
  count += num;
  answer += count;
}

console.log(answer);

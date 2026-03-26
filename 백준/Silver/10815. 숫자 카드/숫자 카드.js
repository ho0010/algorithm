let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let myArr = input[1].split(' ').map(Number);
let M = Number(input[2]);
let tgArr = input[3].split(' ').map(Number);

let mySet = new Set();

for (let i = 0; i < myArr.length; i++) {
  mySet.add(myArr[i]);
}

let answer = [];

for (let i = 0; i < tgArr.length; i++) {
  if (mySet.has(tgArr[i])) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join(' '));

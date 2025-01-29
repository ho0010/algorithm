let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let shirtArr = input[1].split(' ').map(Number);
let penArr = input[2].split(' ').map(Number);

let answerShirt = 0;
let answerSet = Math.floor(N / penArr[1]);
let answerPen = N - penArr[1] * answerSet;

for (let i = 0; i < shirtArr.length; i++) {
  answerShirt += Math.floor(shirtArr[i] / penArr[0]);
  if (shirtArr[i] % penArr[0] !== 0) {
    answerShirt++;
  }
}

console.log(answerShirt);
console.log(answerSet + ' ' + answerPen);

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const myCardArr = input[1].split(' ').map(Number);
const M = Number(input[2]);
const targetCardArr = input[3].split(' ').map(Number);
let myCardCount = {};

myCardArr.sort((a, b) => a - b);

myCardArr.forEach((item) => {
  if (myCardCount[item]) {
    myCardCount[item] += 1;
  } else myCardCount[item] = 1;
});

let answer = targetCardArr.map((item) => myCardCount[item] || 0);

console.log(answer.join(' '));

// mycard를 정렬시키고 값과 개수를 담은 배열 생성
// 배열에서 해당 값 찾아서 출력
// 값 출력할때 이진탐색 적용?

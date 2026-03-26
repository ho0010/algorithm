let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let tgArr = input[1].split(' ').map(Number);
let myArr = input[2].split(' ').map(Number);

const mySet = new Set(myArr);

let answer = [];

tgArr.map((n) => (mySet.has(n) ? 1 : answer.push(n)));

answer.sort((a,b) => a-b );

console.log(answer.length);
if (answer.length > 0) {
  console.log(answer.join(' '));
}

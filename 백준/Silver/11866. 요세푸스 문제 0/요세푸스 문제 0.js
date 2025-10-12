let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);

let circle = [];
let removeArr = [];
let removeNum = M - 1;

for (let i = 1; i < N + 1; i++) {
  circle.push(i);
}

for (let i = 0; i < N; i++) {
  removeNum %= circle.length;
  removeArr.push(circle.splice(removeNum, 1)[0]);
  removeNum += M - 1;
}

console.log(`<${removeArr.join(', ')}>`);

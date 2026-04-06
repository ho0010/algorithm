let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;
let st = 0;
let en = 0;
let sum = 0;

while (en <= arr.length) {
  if (sum < M) {
    sum += arr[en++];
  } else if (sum > M) {
    sum -= arr[st++];
  } else {
    count++;
    sum -= arr[st++];
  }
}

console.log(count);

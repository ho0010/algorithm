const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

let parent = 1;
let child = 1;

for (let i = 0; i < k; i++) {
  parent *= n - i;
  child *= i + 1;
}

console.log(parent / child);

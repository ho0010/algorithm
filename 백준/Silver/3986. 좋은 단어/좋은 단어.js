let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);

let arr = [];
let ans = 0;
for (let i = 0; i < N; i++) {
  arr = input[i + 1].split('');
  let stack = [];
  let k = 0;
  stack.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == stack[k]) {
      stack.pop();
      k--;
    } else {
      stack.push(arr[i]);
      k++;
    }
  }
  if (stack.length == 0) {
    ans++;
  }
}
console.log(ans);
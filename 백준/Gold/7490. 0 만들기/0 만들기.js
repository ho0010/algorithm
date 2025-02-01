let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let K = 0;
let arr = [];

const dfs = (result, depth) => {
  if (depth === K - 1) {
    let str = '';
    for (let i = 0; i < K - 1; i++) str += arr[i] + result[i];
    str += arr[K - 1] + '';
    if (eval(str.split(' ').join('')) === 0) {
      console.log(str);
    }
    return;
  }
  for (let x of [' ', '+', '-']) {
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
};

for (let i = 1; i < N + 1; i++) {
  K = Number(input[i]);
  arr = [];
  for (let i = 1; i < K + 1; i++) arr.push(i);
  dfs([], 0);
  console.log();
}

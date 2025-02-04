let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);

const arr = Array(M).fill('');
let result = [];

const dfs = (lev) => {
  if (lev === M) {
    result.push(arr.join(' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    arr[lev] = i;
    dfs(lev + 1);
  }
};
dfs(0);

console.log(result.join('\n'));

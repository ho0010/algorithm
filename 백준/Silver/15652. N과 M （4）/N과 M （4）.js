let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);

const arr = Array(M).fill('');

const dfs = (lev, start) => {
  if (lev === M) {
    console.log(arr.join(' '));
    return;
  }
  for (let i = start; i <= N; i++) {
    arr[lev] = i;
    dfs(lev + 1, i);
  }
};
dfs(0, 1);

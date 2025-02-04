let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);

const arr = Array(M).fill('');
const visited = Array(N + 1).fill(false);

const dfs = (lev, start) => {
  if (lev === M) {
    console.log(arr.join(' '));
    return;
  }
  for (let i = start; i <= N; i++) {
    if (visited[i]) {
      continue;
    }
    arr[lev] = i;
    visited[i] = true;
    dfs(lev + 1, i);
    visited[i] = false;
  }
};
dfs(0, 1);

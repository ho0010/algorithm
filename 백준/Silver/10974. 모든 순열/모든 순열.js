let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let visited = new Array(N).fill(false);
let selected = [];

let answer = '';

const dfs = (arr, depth) => {
  if (depth == N) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' ';
    answer += '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(arr, 0);
console.log(answer);

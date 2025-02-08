let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let M = Number(input[1]);

let computerArr = [];
let visited = Array(N + 1).fill(false);

for (let i = 1; i <= N; i++) {
  computerArr[i] = [];
}
for (let i = 2; i <= M + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  computerArr[x].push(y);
  computerArr[y].push(x);
}

let answer = 0;

const dfs = (v) => {
  visited[v] = true;
  answer++;

  for (k of computerArr[v]) {
    if (!visited[k]) {
      dfs(k);
    }
  }
};

dfs(1);

console.log(answer - 1);
// 1번과 인접한 것 부터 다 털면 됨

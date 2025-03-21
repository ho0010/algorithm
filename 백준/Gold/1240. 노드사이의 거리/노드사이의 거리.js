let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  let [x, y, cost] = input[i].split(' ').map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i].split(' ').map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0);
  console.log(distance[y]);
}

// 양방향 간선
// 각 요청마다 dfs 실행
// 출발지에서 목적지까지 가는데 같은 길을 다시 가는 경우는 없음 => DFS 가능
// 각 x에서 모든 y 끝까지 얼마의 비용이 전부 들어가는지 조사 
// 하나만 특정해서 구하는거보다 그냥 전부 DFS 돌려서 구한다음 필요한거 쓰는게 더 편함
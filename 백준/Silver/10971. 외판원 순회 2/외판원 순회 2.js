let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let valueArr = [];
for (let i = 0; i < N; i++) {
  valueArr[i] = input[i + 1].split(' ').map(Number);
}

const visited = Array(N).fill(false);
visited[0] = true;
let result = Infinity;
let curValue = 0;

const dfs = (current, depth) => {
  if (depth == N) {
    if (valueArr[current][0] !== 0) {
      result = Math.min(result, curValue + valueArr[current][0]);
    }
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i] && valueArr[current][i] !== 0) {
      visited[i] = true;
      curValue += valueArr[current][i];

      dfs(i, depth + 1);

      visited[i] = false;
      curValue -= valueArr[current][i];
    }
  }
};

dfs(0, 1);

console.log(result);

// 1->2 10
// 2->4 10
// 4->3 9
// 3->1 6
// 결국 다 돌려서 최솟값을 찾아야 하나?
// visited, 마지막에는 무조건 시작한 곳으로 돌아와야 함
// curValue가 result보다 작으면 result = curValue

// curValue = 0이 아니라 curValue -= valueArr[current][i]로 원상복구를 시켜야함
// depth === N 이면 valueArr[current][0]을 더해서 시작으로 돌아온다고 생각할 수 있음
// dfs를 할때 어떤 값이 필요한지를 고려해야함 current로 현재 어디인지 추적하는 것 처럼

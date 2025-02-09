let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let index = 1;

const cabbage = () => {
  let [M, N, K] = input[index].split(' ').map(Number);
  index++;
  let cabbageArr = [];

  for (let i = 0; i < M; i++) {
    cabbageArr[i] = new Array(N).fill(0);
  }

  for (let i = 0; i < K; i++) {
    let [x, y] = input[index].split(' ').map(Number);
    cabbageArr[x][y] = 1;
    index++;
  }

  let cnt = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= M || y < 0 || y >= N || cabbageArr[x][y] === 0) {
      return;
    }
    cabbageArr[x][y] = 0;

    if (x + 1 < M && cabbageArr[x + 1][y] === 1) {
      dfs(x + 1, y);
    }
    if (y + 1 < N && cabbageArr[x][y + 1] === 1) {
      dfs(x, y + 1);
    }
    if (x - 1 >= 0 && cabbageArr[x - 1][y] === 1) {
      dfs(x - 1, y);
    }
    if (y - 1 >= 0 && cabbageArr[x][y - 1] === 1) {
      dfs(x, y - 1);
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (cabbageArr[i][j] === 1) {
        dfs(i, j);
        cnt++;
      }
    }
  }
  console.log(cnt);
};

for (let i = 0; i < T; i++) {
  cabbage();
}

// 1번과 인접한 것 부터 다 털면 됨
//  했을 때 있으면 가능
// 첫 입력에서 시작, 배열이 없어질 때까지, 현재 위치 기준으로 x, y += 1 있으면 거기 가서
// dfs
// 2차원 배열을 크기만큼 만들어서 있으면 true;

// 검사할 다음 배추를 어떻게 찾는지 고민햇는데 그냥 모든 배추에 대해 DFS를 실행

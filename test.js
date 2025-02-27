let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let houseArr = [];
let countArr = [];
let visitedArr = Array.from({ length: N }, () => Array(N).fill(false));
let answer = 0;

// 집 좌표 저장
for (let i = 0; i < N; i++) {
  let row = input[i + 1].split(' ').map(Number);

  for (let j = 0; j < N; j++) {
    visitedArr[i][j] = true;
    if (row[j] === 1) {
      houseArr.push([i, j]);
      visitedArr[i][j] = false;
    }
  }
}

const dfs = (x, y) => {
  if (visitedArr[x][y]) {
    return;
  }
  visitedArr[x][y] = true;
  let count = 1;

  if (x + 1 < N) {
    if (!visitedArr[x + 1][y]) {
      count += dfs(x + 1, y);
    }
  }
  if (x - 1 >= 0) {
    if (!visitedArr[x - 1][y]) {
      count += dfs(x - 1, y);
    }
  }
  if (y + 1 < N) {
    if (!visitedArr[x][y + 1]) {
      count += dfs(x, y + 1);
    }
  }
  if (y - 1 >= 0) {
    if (!visitedArr[x][y - 1]) {
      count += dfs(x, y - 1);
    }
  }
  return count;
};

for (let [x, y] of houseArr) {
  if (visitedArr[x][y]) continue;

  let count = dfs(x, y);

  if (count > 0) {
    answer++;
    countArr.push(count);
  }
}

console.log(answer);

countArr.sort((a, b) => a - b).forEach((count) => console.log(count));

// 13:55~
// 집 좌표들을 배열에 입력
// 선택한 좌표의 근처에 다른 집이 있는지 확인하는 로직
// visited가 필요
// 일단 한번이라도 거치면 visited가 되는거임
// 하나에 들어가서 주위에 집 있으면 계속 실행하다가
// 주위에 집이 없으면 visited가 아닌 다른 집에서 다시 시작하면 됨
// 아이패드 끄적끄적 ++

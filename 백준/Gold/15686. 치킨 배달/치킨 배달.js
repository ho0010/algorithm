// N
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let houseArr = [];
let chickenArr = [];

// 집, 치킨집 좌표 저장
for (let i = 0; i < N; i++) {
  let row = input[i + 1].split(' ').map(Number);

  for (let j = 0; j < N; j++) {
    if (row[j] === 1) houseArr.push([i, j]);
    if (row[j] === 2) chickenArr.push([i, j]);
  }
}

let selected = [];
let answer = Infinity;

// 치킨 거리 계산
const getChickenDistance = () => {
  let totalDist = 0;

  for (let [hx, hy] of houseArr) {
    let minDist = Infinity;

    for (let idx of selected) {
      let [cx, cy] = chickenArr[idx];
      let distance = Math.abs(hx - cx) + Math.abs(hy - cy);
      minDist = Math.min(minDist, distance);
    }

    totalDist += minDist;
  }

  return totalDist;
};

// DFS로 치킨집 경우의 수 다 돌기
const dfs = (depth, start) => {
  if (depth === M) {
    answer = Math.min(answer, getChickenDistance());
    return;
  }

  for (let i = start; i < chickenArr.length; i++) {
    selected.push(i);
    dfs(depth + 1, i + 1);
    selected.pop();
  }
};

dfs(0, 0);

console.log(answer);

// 폐업을 모든 경우의 수로 하며 각 집에서 모든 치킨집에 대한 거리를 계산해서 최소값을 저장 => 집을 찾을 때 N * 모든 치킨집 거리 계산 N (N이 최대 50이라 괜찮음)
// 1번 최소값을 찾아 더한다
// 폐업에 대해서 visited 처리를 하면 어떨까
// dfs에 장사를 하는 치킨집 개수를 넘기도록 한다.
// 치킨집 개수가 차면 그 상황에 대해서 계산을 진행하고

// 50m
// 막혔던 부분: 모든 인덱스를 확인해야 하는데 이건 어떻게 구현하지? => 모든 인덱스에 대해 실행하고 DFS에 index 값을 같이 넘겨주면 됨, 집 배열과 치킨집 배열을 관리
// 현재 선택된 치킨집 배열도 관리해야 함

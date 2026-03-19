let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let items = input.slice(1, 1 + N).map((l) => l.split(' ').map(Number));

let d = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

items = [[0, 0], ...items];

for (let i = 1; i <= N; i++) {
  let w = items[i][0]; // 현재 물건의 무게
  let v = items[i][1]; // 가치

  // 가방의 허용 무게를 K까지 늘리며 돌려보기
  for (let j = 1; j <= K; j++) {
    // 내 물건이 지금 가방의 허용 무게보다 무거워서 못 넣음
    if (j < w) {
      d[i][j] = d[i - 1][j];
    } else {
      // 내 물건을 가방에 넣을 수 있음
      // 안넣고 과거 값, 내 무게만큼 공간 비워둔 과거의 가치 + 내 가치
      d[i][j] = Math.max(d[i - 1][j], d[i - 1][j - w] + v);
    }
  }
}

console.log(d[N][K]);

// 일단 무게순으로 정렬해서 물건 개수별로 최대 값을 구할까?
// 100 * 이론적으로 2^n -> 이게 되나? 안됨.

// 이걸 DP로 생각하기가 진짜 쉽지 않은 듯..
// d[i][w]: i번째 물건까지 살펴봤을 때, 무게 w를 꽉채우거나 넘지않게 배낭에 넣을수있는 최대가치

// 이 풀이가 더 간결하고 오히려 생각도 하기 좋은 풀이인듯
// d[w] = 가방에 무게 w만큼 넣었을 때의 최대 가치

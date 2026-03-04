let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let dist = Array(100001).fill(-1);

let q = [];
let head = 0;

let multiQ = [];
let multiHead = 0;

const dx = [-1, 1];

multiQ.push(N);

dist[N] = 0;

while (1) {
  // 다중 스타트

  while (multiQ.length > multiHead) {
    let A = multiQ[multiHead++];

    for (let i = A; i < 100001; i *= 2) {
      // 이미 방문
      if (dist[i] === -1) {
        q.push(i);
        dist[i] = dist[A];
        // 시작점은 이미 방문 처리는 되어 있지만 q에 넣어야 걷기 탐색 가능
      } else if (i === A) {
        q.push(i);
      } else {
        break;
      }
      if (i === 0) {
        break;
      }
    }
  }

  while (q.length > head) {
    let x = q[head++];

    // 만나면
    if (x === K) {
      return console.log(dist[x]);
    }

    for (let i = 0; i < 2; i++) {
      let nx = x + dx[i];

      // 유효하지 않은 범위
      if (nx < 0 || nx > 100000) {
        continue;
      }
      // 이미 방문
      if (dist[nx] !== -1) {
        continue;
      }

      dist[nx] = dist[x] + 1;

      multiQ.push(nx);
    }
  }
}

// 발산
// 전형적인 BFS 1차원 배열 문제
// 1차원 dist 배열 만들어서 수빈이 현재 위치로부터 퍼뜨리기
// 0초 후에 2*X 위치라는건 다출발 BFS 라는 것
// 다출발 BFS 각각에서 +- 1 하고 동생 위치에 닿으면 해당 dist return
// 순간이동 전부 -> +- 1 -> 순간이동

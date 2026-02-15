let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let arr = Array(100001).fill(-1);
let dist = Array(100001).fill(-1);

arr[N] = 0;
arr[K] = 'K';

let q = [];
let head = 0;
q.push(N);
dist[N] = 0;

while (head < q.length) {
  let x = q[head++];
  let dx = [-1, 1, x];

  for (let i = 0; i < 3; i++) {
    let nx = x + dx[i];

    if (nx < 0 || nx > 100001) {
      continue;
    }

    if (dist[nx] !== -1) {
      continue;
    }

    q.push(nx);
    dist[nx] = dist[x] + 1;
  }
}

console.log(dist[K]);

// 시간

// 발산
// 수빈이 위치 N, 동생 위치를 K
// if (2N) === k 굳 , < K 그럼 OK, > K면 현재 위치에서 가는게 빠른지 아니면 2를 해서 - 하는게 빠른지를 봐야함.
// 근데 왜 BFS냐 이게 ...?
// 아.. distance로 생각해서 그냥 다 전파시키면 되는구나
// 10만까지 전부 최소 dist를 구하면 됨 그리고 동생 위치 값을 그 배열 인덱스에 넣으면 답이긴 하네.

// 수렴
// 10만짜리 -1 배열
// 수빈이랑 동생 위치를 표시 N, K 로
// 수빈이 위치를 시작으로 BFS 시작
// +1, -1, *2

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let k = Number(input[0]);
let inputHead = 1;

for (let i = 0; i < k; i++) {
  let l = Number(input[inputHead++]);

  const dist = Array.from({ length: l }, () => Array(l).fill(-1));

  let [startX, startY] = input[inputHead++].split(' ').map(Number);
  let [targetX, targetY] = input[inputHead++].split(' ').map(Number);

  let q = [];
  let head = 0;

  const dr = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dc = [1, 2, 2, 1, -1, -2, -2, -1];

  q.push([startX, startY]);
  dist[startX][startY] = 0;

  while (head < q.length) {
    let [r, c] = q[head++];

    for (let j = 0; j < 8; j++) {
      let nr = r + dr[j];
      let nc = c + dc[j];

      if (nr < 0 || nc < 0 || nr >= l || nc >= l) {
        continue;
      }

      if (dist[nr][nc] !== -1) {
        continue;
      }
      dist[nr][nc] = dist[r][c] + 1;
      q.push([nr, nc]);
    }
  }

  console.log(dist[targetX][targetY]);
}

// 시간

// 발산
// 일단 dr,dc를 커스텀으로 맞게 짜야함.
// dist를 구하는 문제라고 판단됨.
// 모든 위치들의 dist를 구하고 최종적으로 배열에서 찾으면 된다고 생각함

// 수렴

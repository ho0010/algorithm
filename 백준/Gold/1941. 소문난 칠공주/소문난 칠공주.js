let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let grid = input.slice(0, 5).map((l) => l.split(''));

let answer = [];

let cnt = 0;

function sol(k, index) {
  // base | 7명일 때 4명이상인지 검사
  if (k === 7) {
    let num = 0;
    for (let i = 0; i < 7; i++) {
      if (grid[Math.floor(answer[i] / 5)][answer[i] % 5] === 'S') {
        num++;
      }
    }
    if (num >= 4 && bfs(answer)) {
      cnt++;
    }
    return;
  }
  for (let i = index; i < 25; i++) {
    answer.push(i);
    sol(k + 1, i + 1);
    answer.pop();
  }
}

function bfs(arr) {
  let visited = Array(25).fill(false);
  let head = 0;
  let q = [];
  visited[arr[0]] = true;
  q.push(arr[0]);
  let connected = 1;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (head < q.length) {
    let x = q[head++];

    let r = Math.floor(x / 5);
    let c = x % 5;

    for (let i = 0; i < 4; i++) {
      let nr = r + dx[i];
      let nc = c + dy[i];

      if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5) {
        let nextIdx = nr * 5 + nc;

        if (arr.includes(nextIdx) && !visited[nextIdx]) {
          visited[nextIdx] = true;
          q.push(nextIdx);
          connected++;
        }
      }
    }
  }

  return connected === 7;
}

sol(0, 0);
console.log(cnt);

// 발산
// 백트 -> for문 인자, visited

// 4개의 S를 포함하며 칠 공주를 만드는 배열이 몇 개 있는가를 count

// 위에 생각보다는 모든 경우의 수에서 조건을 만족하는지를 보는건 어떨까?
// 인접한 것들로 이루어져있는지와 S가 4명 이상인지
// 인접한 것들로 이루어져있는지 -> 이건 인접한 것들로만 하면 어떨까?

// 인접한 7개를 만들 수 있는 모든 경우의 수에 대해 S가 4명 이상인 것들을 count하면 어떨까?
// BFS랑 더해진 느낌이긴 하네
// 인접한 것만 돌리도록 vs 인접한지 검사하도록
// 인접한 것만 돌리도록이 더 적절하다고 생각

// 조합이니까 for문에 BFS를 섞는건가?

// 33m -> 힌트
// 2차원 for문이 아니라 1차원 배열로 생각할 것

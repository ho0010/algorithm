let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = input.slice(1, 1 + N).map((l) => l.split(' ').map(Number));
let d = Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  const t = arr[i][0];
  const p = arr[i][1];

  // 오늘 쉰다
  d[i + 1] = Math.max(d[i + 1], d[i]);

  // 오늘 상담을 한다.
  // 상담이 끝나는 날 퇴사일이 넘지 않으면, 미래의 통장에 돈 갱신
  if (i + t <= N) {
    d[i + t] = Math.max(d[i + t], d[i] + p);
  }
}

console.log(d[N]);

// 모든 경우의 수 -> 노가다도 가능한데 일단 DP로 풀어보자
// d[i] = day i 까지 했을 때 가장 큰 이익
// 하 왜 못풀겠지

// 과거를 묻지 말고, 미래의 통장에 돈을 꽂아라
// 오늘 쉰다 (상담 안함) -> 오늘까지 번 돈 그대로 내일로 넘어감
// 오늘 상담한다 -> d[i + T] = Math.max(d[i + T], d[i] + P)

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let home = input
  .slice(1, N + 1)
  .flatMap((l) => l.split(' ').map(Number))
  .sort((a, b) => a - b);

let st = 1;
let en = home[N - 1] - home[0];
let answer = 0;

while (st <= en) {
  // 가장 인접한 두 공유기 사이의 거리라고 가정
  let mid = Math.floor((st + en) / 2);

  let count = 1; // 첫 집에는 무조건 설치
  let lastInstalled = home[0];

  for (let i = 1; i < N; i++) {
    if (home[i] - lastInstalled >= mid) {
      count++;
      lastInstalled = home[i];
    }
  }

  if (count >= M) {
    // 설치 가능하다면, 더 큰 거리가 있는지 탐색
    answer = mid;
    st = mid + 1;
  } else {
    // 불가능하면, 거리를 좁히기
    en = mid - 1;
  }
}

console.log(answer);

// 집이 있는 위치에 공유기를 설치할 건데 가장 인접한 거리가 가장 크도록
// 공유기 개수를 생각하면 완탐은 안됨.
// 2개는 일단 고정이긴하네 가장 끝.
// 양 끝을 더하고 (공유기 수-1)만큼 나눈다.
// 저 나눈 수를 시작점에서 더하고 그 곳과 비슷한 값 +1,-1 해가며 하나를 고른다...?
// 근데 이러면 이분탐색이라고 할 수 있나?

// 처음과 끝을 더하고 -1 하고 그걸 공유기 수 -1 만큼 나눈다.
// 그리고 처음에서 그 나눈 수만큼 더하고 그 수나 주위 수를 찾는다.
// 그리고 그 다음 반복

// 내가 생각한 이 방법은 너무 느리다..
// 그리고 최소 거리의 최댓값을 보장할 수 없다.

// 파라메트릭 서치 문제이다.
// 생각을 달리 해야 함.
// 공유기를 어디에 설치할까? -> 가장 인접한 두 공유기 사이의 거리를 X라고 했을 때, 공유기 M개를 설치할 수 있는가?
// 탐색 대상 -> 최소 거리 자체를 이분 탐색
// 결정 함수(Check): "거리 mid 이상으로 M개 설치 가능?

// 결국 생각의 전환이 핵심인..

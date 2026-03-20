let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);

let flowers = [];

// 레전드 저장법..
for (let i = 1; i <= N; i++) {
  let [sm, sd, em, ed] = input[i].split(' ').map(Number);
  flowers.push([sm * 100 + sd, em * 100 + ed]);
}

flowers.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - a[1];
  return a[0] - b[0];
});

let count = 0;
let target = 301;
let maxEnd = 0;
let idx = 0;

while (target <= 1130) {
  let found = false;

  // 시작일이 현재 목표 날짜 이하인 꽃들 중
  while (idx < N && flowers[idx][0] <= target) {
    // 가장 늦게 지는 꽃
    maxEnd = Math.max(maxEnd, flowers[idx][1]);
    idx++;
    found = true;
  }

  // target 이하로 피는 꽃을 못찾았으면 ㅈㅈ
  if (!found) {
    return console.log(0);
  }

  // 가장 늦게 지는 꽃을 발견한 것, 다음 목표 날짜를 그 꽃이 지는 날로 갱신
  target = maxEnd;
  count++;
}

console.log(count);

// n이 10만인 거부터 완탐은 안됨
// 시작일이 <= 3/1인 꽃 중에 끝나는 날이 가장 긴 거 선택 -> 만약 없으면 0 출력
// 종료일이 >= 11/30인 것 중에 시작일이 가장 이른 거 선택 -> 만약 없으면 0 출력

// 뭔가 정렬을 하면 좋을 것 같은데 뾰족한 수는 없네..
// 현재 시간이 t 일때 시작일이 t보다 같거나 작은 것 중에 종료일이 가장 긴 걸 선택하는게 유리하다.
// 시작일과 끝일을 전역변수로 두고 계속 갱신하면 어떨까?

// 만약 끝 일이 ~2/28 이면 continue -> 필요 없음
// end가 11/30보다 크거나 같으면 return cnt -> 끝
// 지금 끝일이 end보다 짧거나 같아 -> 필요 없음 (이 아래로는 end가 더 큼)
// 지금 시작일이 end보다 2일이상 커 -> 0 출력
// 지금 시작일이 end보다 작거나 같아 -> count ++;,  start 갱신 end 갱신

// 60분 싸웠다..[ 2, 28, 4, 25 ],[ 4, 12, 6, 5 ], [ 6, 3, 6, 15 ],[ 6, 15, 9, 27 ],[ 9, 14, 12, 24 ],

// 40분 더 박고 포기
// 이게 M,D 둘다 If else로 풀려니까 걍 답이 없음
// 현재 시간이 t 일때 시작일이 t보다 같거나 작은 것 중에 종료일이 가장 긴 걸 선택하는게 유리하다.
// 이건 딱 맞았는데 날짜를 하나의 숫자로 합치는 아이디어까지 필요했음..

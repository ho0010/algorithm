let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let sumMap = new Map();

// 객체 수만큼 실행
for (let i = 0; i < N - 1; i++) {
  let st = i + 1;
  let ed = N - 1;
  while (st <= ed) {
    let mid = Math.floor((st + ed) / 2);
    let sum = arr[i] + arr[mid];

    // 더한 값이 0이면 끝
    if (sum === 0) {
      return console.log(arr[i], arr[mid]);
    } else if (sum > 0) {
      ed = mid - 1;
      sumMap.set(sum, [arr[i], arr[mid]]);
    } else {
      st = mid + 1;
      sumMap.set(sum, [arr[i], arr[mid]]);
    }
  }
}

let min = Infinity;
let answer = [];
sumMap.forEach((k, v) => {
  if (min > Math.abs(v)) {
    min = Math.abs(v);
    answer = k;
  }
});

console.log(answer.join(' '));

// 두 개를 섞어서 최적의 경우의 수를 만든다.
// 완탐으로 모든 경우의 수를 섞어서 가장 0에 가까운 값을 만들 수도 있다. -> 시간 복잡도 터짐
// 어떻게 하면 경우의 수 맞춰보는걸 줄일 수 있을까?
// 어찌 됐건 오름차 순으로 되어 있으니까. 이분탐색을 할 수 있지 않을까?
// Map으로 키: 두 숫자, 벨류: 더한 값 -> 벨류 중에 가장 큰 값 구하기
// 오름차순 출력
// 이분 탐색은 N을 logN으로 바꾼다.
// NlogN이면 될 것 같다.

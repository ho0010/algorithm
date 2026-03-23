let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));

arr.sort((a, b) => a[1] - b[1]);
arr.sort((a, b) => a[0] - b[0]);

let x = -1000000001;
let y = -1000000001;
let answer = 0;

for (let i = 0; i < N; i++) {
  let nowX = arr[i][0];
  let nowY = arr[i][1];
  if (nowX >= x && nowX <= y) {
    if (nowY > y) {
      y = nowY;
    }
  } else if (nowX > y) {
    answer += y - x;
    x = nowX;
    y = nowY;
  }
  // 마지막 선 처리
  if (i === N - 1) {
    answer += y - x;
  }
}
console.log(answer);

// 100만짜리 배열 두고 채우면 안되나? -> 이어지는 선인지 아닌지 확인하면서 계산하기가 빡일듯

// 하나씩 보고 배열에 넣는데 이어지는 선인지 아닌지에 따라 최신화 하면서 넣으면 될 듯?
// 정렬 시키고
// nowX가 X보다 크거나 같고 Y보다 작거나 같을때 nowY가 Y보다 크다면 Y 최신화
// nowX가 Y보다 크다면 새로운 배열임 -> 지금까지 한거 계산하고 X,Y 다시 세팅
// 만약 마지막 선이면 -> 지금까지 한 X,Y 계산

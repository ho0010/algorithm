let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let arr = input
  .slice(1, 1 + N)
  .flatMap((l) => l.split(' ').map(Number))
  .sort((a, b) => a - b);

let st = 0;
let en = 1;
let min = Infinity;

while (en < N) {
  let value = arr[en] - arr[st];

  if (value < M) {
    en++;
  } else {
    min = Math.min(min, value);
    if (value === M) break;
    st++;
  }
}

console.log(min);

// 포인터를 두 개를 두고 st = 0, en=1 로 둔다.
// en을 계속 늘린다. 그 차이가 M이상이 될 때 까지 그리고 min 갱신
// M 이상이 되면 st를 늘린다.
// 그러다가 차이가 M 미만이 되면 끝.

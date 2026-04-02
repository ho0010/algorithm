let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, S] = input[0].split(' ').map(Number);
let arr = input.slice(1, 1 + N).flatMap((l) => l.split(' ').map(Number));

let st = 0;
let en = 0;
let sum = 0;
let count = Infinity;

for (st = 0; st < N; st++) {
  while (en < N && sum < S) {
    sum += arr[en];
    en++;
  }

  if (sum >= S) {
    count = Math.min(count, en - st);
  }
  sum -= arr[st];
}

if (count === Infinity) {
  console.log(0);
} else {
  console.log(count);
}

// 포인터를 두 개를 두고 st=0, en=0 로 둔다.
// 일단 합이 S 보다 작으면 en을 계속 키운다.
// 근데 연속된 값인지를 확인해야함.
// 연속된 값이 아니라면 st = en으로 둬야하지 않나?

// 연속이 그 연속이 아니네.. 배치상의 연속을 이야기.

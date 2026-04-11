let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, d, k, c] = input[0].split(' ').map(Number);
const inputArr = input.slice(1, N + 1).flatMap((l) => l.split(' ').map(Number));
const addArr = input.slice(1, k + 1).flatMap((l) => l.split(' ').map(Number));

const arr = [...inputArr, ...addArr];

let countArr = Array(d + 1).fill(0);

let en = 0;
let answer = 1;
let nowCnt = 1;

countArr[c] = 1;

for (let st = 0; st < N; st++) {
  while (en - st < k) {
    if (countArr[arr[en]] === 0) {
      nowCnt++;
    }

    countArr[arr[en]] += 1;
    en++;

    answer = Math.max(nowCnt, answer);
  }

  if (countArr[arr[st]] === 1) {
    nowCnt--;
  }

  countArr[arr[st]] -= 1;
}

console.log(answer);

// start 기준으로 모든 경우의 수를 다 보면 어떨까? N
// q 가 필요할까?
// q로 넣고 빼기 하고, 각 조합 + 쿠폰 번호까지 포함해서 Set에 넣고 숫자를 세면 어떨까?
// 매번 Set을 만들기가 무겁나? ㅇㅇ 안됨

// 초밥의 종류를 준 것으로 보아 인덱스 배열이 필요해 보임.

// st, en 인덱스 활용, 인덱스 배열 만들어서 cnt 최신화해
// en이 늘어날 때 en이 cnt가 0이었다면 answer ++;
// cnt가 0이 아니었다면 ㄴㄴ
// 그리고 st 늘어날 때 cnt가 1이었다면 answer --;
// 1이 아니었다면 ㄴㄴ;

// 회전 초밥이라 카운팅 방식이래도 더 돌아야함.

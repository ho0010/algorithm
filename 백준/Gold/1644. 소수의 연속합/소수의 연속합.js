let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

if (n === 1) return console.log(0);

// 소수는 에라체로 처리
function getPrimes(max) {
  const isPrime = new Array(max + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
}

const primes = getPrimes(n);
const primesLen = primes.length;
let count = 0;

// 이분 탐색

for (let st = 0; st < primesLen; st++) {
  let sum = primes[st];
  let en = st;

  while (en < primesLen) {
    // 타겟보다 작으면
    if (sum < n) {
      en++;
      if (en === primesLen) break;
      sum += primes[en];
    } else if (sum > n) {
      break;
    } else {
      count++;
      break;
    }
  }
}
console.log(count);

// 소수: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
// 소수에 규칙이 있나?
// 에라토스테네스의 체를 알아야한다는데? -> 소수 판별 알고리즘이다.
// 에라토스테네스의 체 + 이분탐색
// st 0 en 0 시작해서 타겟보다 작으면 en 늘리고 크면 st 늘리기
// 딱 맞으면 cnt++; st,ed 모두 그 다음 인덱스로 세팅

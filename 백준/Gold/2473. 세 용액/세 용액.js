let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let min = Infinity;
let minArr = [];

// 숫자 하나만 고정하고 나머지 2 개를 투 포인터로 찾는다.
for (let i = 0; i < N - 2; i++) {
  let st = i + 1;
  let ed = N - 1;

  /// 같은 숫자를 두 번 고를 수 없으니까 등호는 빼기
  while (st < ed) {
    let sum = arr[i] + arr[st] + arr[ed];

    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      minArr = [arr[i], arr[st], arr[ed]];
    }

    // 값 조절 로직이 다르다.
    if (sum > 0) {
      ed--;
    } else if (sum < 0) {
      st++;
    } else {
      console.log(arr[i], arr[st], arr[ed]);
      process.exit();
    }
  }
}

console.log(minArr.join(' '));

// N * N * logN

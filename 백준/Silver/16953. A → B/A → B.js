let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = 1;

const arr = input[0].split(' ');
let A = Number(arr[0]);
let B = Number(arr[1]);

while (B > A) {
  if (B % 2 === 0) {
    B /= 2;
  } else if (B % 10 === 1) {
    B = Math.floor(B / 10);
  } else {
    answer = -1;
    break;
  }
  answer++;
}

if (B !== A) {
  answer = -1;
}

console.log(answer);

// B를 A에 가까운 수로 바꿔가는 로직
// 타겟 숫자보다 작거나 같아질 때까지 반복
// 2로 나눈다. 안되면 오른쪽에서 1을 제외한다.

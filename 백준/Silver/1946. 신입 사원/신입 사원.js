let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let line = 1;

for (let i = 0; i < T; i++) {
  let n = Number(input[line]);
  let arr = [];

  for (let j = line + 1; j <= line + n; j++) {
    arr.push(input[j].split(' ').map(Number));
  }

  let count = 0;

  arr.sort((a, b) => a[0] - b[0]);

  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}

// 각 신입사원에 대해 모든 다른 신입사원들 각각보다 순위가 높은게(숫자가 작은게) 하나라도 있어야 됨
// 각 신입사원에 대해 모든 다른 신입사원들 각각과 비교 했을 때 두 숫자가 모두 크면 out
// 시간 복잡도 통과를 못 할 것임 => 정렬이 필요한듯
// 정렬한번 하고 반복문 돌리면?
// 오름차순 정렬하고 비교해보자
// nlogn 방법을 찾아야함

// 일일이 비교하는게 아니라 minvalue 값을 지정해서 그거보다 작으면 count 하는 형식
// line 변수를 이용해서 조금 더 쉽게 입력을 받을 수 있도록 처리함 => 결국 이거 관리 못해서 안굴러감

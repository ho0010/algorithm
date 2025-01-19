let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let groups = input[0].split('-');
let answer = 0;

for (let i = 0; i < groups.length; i++) {
  let cur = groups[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) answer += cur;
  else answer -= cur;
}

console.log(answer);

// 입력받은 string을 어떻게 정리할 건지
// 숫자가 오는 경우, -가 오는 경우, +가 오는 경우 나누어서 처리
// -가 오면 괄호를 열어서 다음 -가 오거나 문장이 끝날때 괄호를 닫게 함
// eval을 이용하면 문자열로 작성된 코드를 런타임에 실행할 수 있음
// 공간 복잡도 문제가 생겨서 해결했으나 시간 복잡도 문제가 생겼고 방법을 바꿨어야 함

// 강의 확인
// -를 기준으로 처음에 분리하는게 더 효율적인 방법임
// + 를 기준으로 나누고 + 연산 처리를 해주면 됨
// 첫 번째 그룹에 대한 처리는 항상 +
// 두 번째 그룹부터 - 해주면 됨

// - 연산자가 문제의 핵심임을 알았으나 적절히 연산해줄 방법을 찾지 못했었음
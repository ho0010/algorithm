let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);

let answer = '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.';
let cnt = 0;

function sol(n, cnt) {
  let str = '';
  for (let i = 0; i < cnt; i++) {
    str += '____';
  }

  if (n === 0) {
    answer += '\n' + str;
    answer += '"재귀함수가 뭔가요?"';
    answer += '\n' + str;
    answer += '"재귀함수는 자기 자신을 호출하는 함수라네"';
    answer += '\n' + str;
    answer += '라고 답변하였지.';
    return;
  }
  answer += '\n' + str;
  answer += '"재귀함수가 뭔가요?"';
  answer += '\n' + str;
  answer += '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.';
  answer += '\n' + str;
  answer += '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.';
  answer += '\n' + str;
  answer +=
    '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."';

  sol(n - 1, cnt + 1);

  answer += '\n' + str;
  answer += '라고 답변하였지.';
}

sol(N, cnt);
console.log(answer);

// 시간
// 함수 정의: n번만큼 문자열을 출력시키는 함수
// base: n=1로 생각
// 재귀 식: 어느 한~ 물었어, ____ 재귀함수가 뭔가요~ 라고 답변 하였지., 라고 답변하였지.

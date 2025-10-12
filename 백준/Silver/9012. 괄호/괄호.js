let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let paren = [];

let stack = [];
let flag = false;

for (let i = 0; i < N; i++) {
  paren = input[i + 1].split('');
  stack = [];
  flag = false;

  for (let j = 0; j < paren.length; j++) {
    temp = paren[j];
    if (temp == '(') {
      stack.push(temp);
    } else {
      if (stack[stack.length - 1] == '(') stack.pop();
      else {
        console.log('NO');
        flag = true;
        break;
      }
    }
  }

  if (flag == true) {
    continue;
  }
  if (stack.length != 0) {
    console.log('NO');
    continue;
  }
  console.log('YES');
}

// ( 는 항상 push
// ) 는 stack 가장 위 값이 ( 일때 해당 값 pop
// 다 끝났는데 뭐가 남아 있으면 NO 다 떨이면 YES

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);

let answer = [];
let stack = [];
for (let i = 1; i <= N; i++) {
  if (input[i].includes('push')) {
    stack.push(input[i].split(' ')[1]);
  } else if (input[i].includes('pop')) {
    answer.push(stack.length === 0 ? -1 : stack.pop());
  } else if (input[i].includes('size')) {
    answer.push(stack.length);
  } else if (input[i].includes('empty')) {
    answer.push(stack.length === 0 ? 1 : 0);
  } else {
    answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
}
console.log(answer.join('\n'));

// push, pop 이용해서 구현

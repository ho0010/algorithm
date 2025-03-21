let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = [];
let queue = [];
for (let i = 1; i < input.length; i++) {
  if (input[i].includes('push')) queue.push(input[i].split(' ')[1]);
  else if (input[i].includes('pop')) answer.push(queue.length === 0 ? -1 : queue.shift());
  else if (input[i].includes('size')) answer.push(queue.length);
  else if (input[i].includes('empty')) answer.push(queue.length === 0 ? 1 : 0);
  else if (input[i].includes('front')) answer.push(queue.length === 0 ? -1 : queue[0]);
  else answer.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
}
console.log(answer.join('\n'));

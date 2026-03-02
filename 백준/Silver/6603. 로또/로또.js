let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let index = 0;

while (input[index] !== '0') {
  let arr = input[index].split(' ').map(Number);
  let newArr = arr.slice(1);

  let answer = [];
  let stack = [];

  function sol(k) {
    if (stack.length === 6) {
      answer.push(stack.join(' '));
      return;
    }
    for (let i = k; i < newArr.length; i++) {
      stack.push(newArr[i]);
      sol(i + 1);
      stack.pop();
    }
  }

  sol(0);

  if (index !== 0) {
    console.log('');
  }
  index++;
  console.log(answer.join('\n'));
}

// 발산
// 결과적으로는 다른 정답 배열과 같은게 없음

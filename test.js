let input = require('fs').readFileSync('./dev/stdin.txt').toString().trim().split('\n');
let N = Number(input[0]);
let arr = new Set([]);

for (let i = 1; i <= N; i++) {
  const [text, num] = input[i].split(' ');
  const convertedNum = Number(num);
  if (text == 'add') {
    arr.add(convertedNum);
  } else if (text == 'check') {
    if (arr.has(convertedNum)) {
      console.log('1');
    } else {
      console.log('0');
    }
  } else if (text == 'remove') {
    arr.delete(convertedNum);
  } else if (text == 'toggle') {
    if (arr.has(convertedNum)) {
      arr.delete(convertedNum);
    } else {
      arr.add(convertedNum);
    }
  } else if (text == 'all') {
    for (let j = 1; j <= 20; j++) {
      arr.add(j);
    }
  } else if (text == 'empty') {
    arr.clear();
  }
}

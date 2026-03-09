let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = input.slice(1, N + 1);

function getSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      sum += Number(str[i]);
    }
  }
  return sum;
}

arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  let sumA = getSum(a);
  let sumB = getSum(b);
  if (sumA !== sumB) {
    return sumA - sumB;
  }
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

console.log(arr.join('\n'));

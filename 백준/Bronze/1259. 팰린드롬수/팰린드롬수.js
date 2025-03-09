const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const isPalindrome = (num) => {
  let len = num.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (num[i] !== num[len - 1 - i]) {
      return 'no';
    }
  }
  return 'yes';
};

input.forEach((num) => {
  if (num === '0') return;
  console.log(isPalindrome(num));
});

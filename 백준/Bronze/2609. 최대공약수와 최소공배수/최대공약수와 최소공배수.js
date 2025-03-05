let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [a, b] = input.map(Number);

const gcd = (x, y) => {
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

const lcm = (x, y) => (x * y) / gcd(x, y);

console.log(gcd(a, b));
console.log(lcm(a, b));

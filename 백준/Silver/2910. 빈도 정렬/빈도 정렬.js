let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, C] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let map = new Map();

for (let num of arr) {
  // 맵에 존재한다면
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
  } // 맵에 없다면
  else {
    map.set(num, 1);
  }
}

let mapArr = [...map];

mapArr.sort((a, b) => b[1] - a[1]);

let answer = [];

for (let i = 0; i < mapArr.length; i++) {
  let [value, k] = mapArr[i];
  for (let j = 0; j < k; j++) {
    answer.push(value);
  }
}

console.log(answer.join(' '));

// 숫자 크기 범위가 10억이라 배열 깔아놓고 인덱스 넣는건 안됨
// Set에 집어넣고 +1 하면 어떨까

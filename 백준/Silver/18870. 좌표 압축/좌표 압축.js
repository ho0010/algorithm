let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ');
const uniqueArr = [...new Set(arr)];
const sortedUniqueArr = uniqueArr.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < sortedUniqueArr.length; i++) {
  myMap.set(uniqueArr[i], i);
}

answer = '';
for (x of arr) answer += myMap.get(x) + ' ';
console.log(answer);

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let nums = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

const index = nums[1];



let answer = arr[index-1];

console.log(answer);

// 실버 5 - 좌표 정렬하기
// sort => 배열을 정렬

const fs = require("fs");
let input = fs
  .readFileSync("/Users/jihojun/vscode/algorithm/input.txt")
  .toString()
  .trim()
  .split("\n");

const iter = Number(input.shift());
let arr = [];

for (let i = 0; i < iter; i++) {
  arr.push(input[i].split(" ").map((item) => Number(item)));
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let ans = [];

for (let i = 0; i < iter; i++) {
  let answer = arr[i].join(" ");
  ans.push(answer);
}

console.log(ans.join("\n"));

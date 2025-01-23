let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let balloons = input[1].split(' ').map(Number);

let arrows = [];
let answer = 0;

for (let h of balloons) {
  let found = false;

  // 현재 풍선을 터뜨릴 수 있는 화살 찾기
  for (let i = 0; i < arrows.length; i++) {
    if (arrows[i] === h) {
      arrows[i]--; // 해당 화살의 높이를 감소
      found = true;
      break;
    }
  }

  if (!found) {
    // 기존 화살로 터뜨릴 수 없으면 새 화살 추가
    arrows.push(h - 1);
    answer++;
  }
}

console.log(answer);

// 화살의 높이를 관리하면서, 기존화살로 풍선을 터뜨리거나, 새로운 화살을 발사

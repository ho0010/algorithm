let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = input[0];

let lengthArr = input[1].split(' ').map(Number);
let priceArr = input[2].split(' ').map(Number);
let answer = 0;
let minimalPrice = priceArr[0];

for (let i = 0; i < priceArr.length - 1; i++) {
  if (minimalPrice > priceArr[i]) {
    minimalPrice = priceArr[i];
  }
  answer += minimalPrice * lengthArr[i];
}

console.log(answer);

// 도시에서 출발하기 전에 기름을 구매하는 것을 한 번의 단위로 생각
// 앞으로 남은 도시의 기름 가격 중 현재 보다 더 싼 곳이 있는 지 없는 지에 따라 다르게 처리?
// minimal price를 유지
// 이번 price가 minimal price보다 어떤지 비교하고 진행

// 시간 복잡도 생각하면 O(N^2)는 안됨

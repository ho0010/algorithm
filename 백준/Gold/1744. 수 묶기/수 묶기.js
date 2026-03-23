let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let arr = input.slice(1, N + 1).map(Number);

let negatives = arr.filter((v) => v <= 0).sort((a, b) => a - b);
let positives = arr.filter((v) => v > 0).sort((a, b) => b - a);

let answer = 0;

// 음수 처리
for (let i = 0; i < negatives.length; i += 2) {
  // 개수가 하나일 때 따로 처리
  if (i + 1 < negatives.length) {
    answer += negatives[i] * negatives[i + 1];
  } else {
    answer += negatives[i];
  }
}

// 양수 처리
for (let i = 0; i < positives.length; i += 2) {
  if (i + 1 < positives.length) {
    if (positives[i] === 1 || positives[i + 1] === 1) {
      answer += positives[i] + positives[i + 1];
    } else {
      answer += positives[i] * positives[i + 1];
    }
  } else {
    answer += positives[i];
  }
}

console.log(answer);

// 일단 정렬은 필요함.
// 양수인 수는 큰 것 부터 묶을 수 있는 건 다 묶으면 됨
// 양수와 음수는 묶으면 손해
// 양수와 0도 묶으면 손해
// 음수와 0은 묶으면 이득 (가장 작은 음수, 단 짝수 개 일때는 그냥 안묶는게 이득)

// 인덱스 0부터 시작
// 음수고 다음 값이 음수라면 곱하기, 0이면 곱하기, 양수면 그냥 더하기
// 0이면 건너뛰기
// 양수면 일단 전체 길이에서 현재 인덱스를 빼 (처음만) 그게 짝수면 곱하고 홀수면 이거 넘어가고 그 다음부터 곱해

// 문제 -> 이게 나도 생각했던 건데 작은수로 나누면 뒤에 양수 때문에 로직이 더 복잡해짐
// 처음부터 그룹을 나눠보는건 어떨까?

// 항상 풀 때 노가다가 예상되고 그걸 선제적으로 최적화할 수 있는 부분은 하는게 좋다.

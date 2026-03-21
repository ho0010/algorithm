let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let idx = 1;
let answer = [];

for (let i = 0; i < T; i++) {
  let N = Number(input[idx++]);
  let cnt = 0;
  let arr = input[idx++].split(' ').map(Number);
  let max = arr[N - 1];

  for (let j = N - 2; j >= 0; j--) {
    if (arr[j] > max) {
      max = arr[j];
      continue;
    } else if (arr[j] < max) {
      cnt += max - arr[j];
    } else {
      continue;
    }
  }

  answer.push(cnt);
}

console.log(answer.join('\n'));

// 순서가 중요하네 일단 정렬을 하면 깨지는데 그럼 정렬을 할 수는 없나?
// 남은 날에 지금보다 높은 수가 없으면 안삼 -> 근데 이걸 다 확인하기는에 날이 100만임
// 뒤에서부터 시작해서 맨 뒤 수를 max로 등록
// 그 다음 수가 자기보다 작다 -> 그 차이만큼 이익에 +, 다음 수로 이동
// 자기랑 같은수면 그냥 다음수로 이동
// 자기보다 큰 수면 -> max 갱신 -> 다음 수로 이동

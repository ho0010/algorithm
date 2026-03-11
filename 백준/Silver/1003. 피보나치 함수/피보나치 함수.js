let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);

let arr = input.slice(1, 1 + T).flatMap((l) => l.split(' ').map(Number));

// 각 케이스 실행
for (let num of arr) {
  let d = Array.from({ length: num + 2 }, () => [0, 0]);

  // 초기 값
  d[0][0] = 0;
  d[0][1] = 1;

  d[1][0] = 1;
  d[1][1] = 0;

  if (num === 0) {
    console.log(1, 0);
    continue;
  } else if (num === 1) {
    console.log(0, 1);
    continue;
  }

  for (i = 2; i <= num; i++) {
    d[i][0] = d[i - 1][0] + d[i - 2][0];
    d[i][1] = d[i - 1][1] + d[i - 2][1];
  }

  console.log(d[num][1], d[num][0]);
}

// 테이블 정의
// D[i] = i까지 출력된 0과 1 개수
// 점화식 찾기
// D[0] = 1, 0
// D[1] = 0, 1
// D[2] = D[0] + D[1] = 1, 1
// D[3] = D[1] + D[2] = 1, 2
// 초기값 정의

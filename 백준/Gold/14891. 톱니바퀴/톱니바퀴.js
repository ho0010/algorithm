let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let arr = input.slice(0, 4).map((l) => l.split('').map(Number));
let T = Number(input[4]);
let rotate = input.slice(5, 5 + T).map((l) => l.split(' ').map(Number));

let dx = [-1, 1];

// case 만큼 실행
for (let i = 0; i < T; i++) {
  let [wheelNum, direction] = rotate[i];
  wheelNum -= 1;
  // 톱니바퀴 회전 전이 검사
  let q = [];
  let head = 0;

  let visited = Array(4).fill(false);

  q.push([wheelNum, direction]);
  visited[wheelNum] = true;

  while (q.length > head) {
    let [num, dir] = q[head++];

    for (let j = 0; j < 2; j++) {
      let nx = num + dx[j];
      // nx가 범위에 벗어남
      if (nx < 0 || nx > 3) {
        continue;
      }
      // 현재의 오른쪽 톱니이고 극이 달라 그리고 방문도 한 적 없어
      if (nx > num && arr[num][2] !== arr[nx][6] && visited[nx] === false) {
        q.push([nx, -dir]);
        visited[nx] = true;
      }
      // 현재의 왼쪽 톱니이고 극이 달라
      if (nx < num && arr[num][6] !== arr[nx][2] && visited[nx] === false) {
        q.push([nx, -dir]);
        visited[nx] = true;
      }
    }
  }

  // 회전
  for (let k = 0; k < q.length; k++) {
    sol(q[k][0], q[k][1]);
  }
}

function sol(num, dir) {
  let newArr = [];

  if (dir === 1) {
    newArr = [arr[num][7], ...arr[num].slice(0, 7)];
  } else {
    newArr = [...arr[num].slice(1, 8), arr[num][0]];
  }

  arr[num] = newArr;
}

// 점수 카운팅
let answer = 0;
for (let k = 0; k < 4; k++) {
  if (arr[k][0] === 1) {
    answer = answer + 2 ** k;
  }
}

console.log(answer);

// 톱니바퀴 회전시키는 함수
// 톱니바퀴 번호, 방향 => 원본 배열 변환
// 근데 원본 배열을 바로 변화시키려면 다른 톱니바퀴까지 한 번에 같이 확인해서 호출해야할듯 문제는 안될 것 같음.

// 시계방향 회전이면? 하나씩 오른쪽으로 밀기 pop 하고  slice + 그 값
// 반시계 맨 앞 하나 떼고 slice + 그 값

// 메인 함수에서는
// case 마다 해당 톱니바퀴 기준으로 다른 톱니바퀴도 돌아가야하는지 확인 후 적절히 호출.

// 점수 매기는 함수
// 각 톱니바퀴 0의 값 확인해서 카운팅

// 톱니바퀴 번호주고 그 인접 톱니바퀴

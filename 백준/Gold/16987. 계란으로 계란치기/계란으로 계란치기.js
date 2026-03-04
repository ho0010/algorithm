let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let eggs = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));

let answer = 0;
function sol(arr, index) {
  // base = 다 쳤으면 깨진 계란 검사해서 최대값인지 확인해서 return
  // console.log(arr, index);
  if (index === N) {
    let cnt = 0;

    for (let j = 0; j < N; j++) {
      if (arr[j][0] === 0) {
        cnt++;
      }
    }
    return (answer = Math.max(answer, cnt));
  }
  // 잡을 계란이 깨져있으면 잡지 못함.
  if (arr[index][0] !== 0) {
    // 포인트
    let hit = false;
    for (let i = 0; i < N; i++) {
      // 자기 자신은 제외
      if (index === i) {
        continue;
      }

      if (arr[i][0] === 0) {
        continue;
      }

      let newArr = arr.map((l) => [...l]);

      // 내구도 깎기
      hit = true;

      newArr[i][0] -= newArr[index][1];
      if (newArr[i][0] < 0) {
        newArr[i][0] = 0;
      }
      newArr[index][0] -= newArr[i][1];
      if (newArr[index][0] < 0) {
        newArr[index][0] = 0;
      }

      sol(newArr, index + 1);
    }

    // 다른 계란이 다 깨져있어서 아무것도 치지 못했다
    if (!hit) {
      sol(arr, index + 1);
    }
  } else {
    sol(arr, index + 1);
  }
}

sol(eggs, 0);

console.log(answer);

// 50m + 30m = 80m
// 발산
// 음 근데 이게 어캐 백트래킹이지?
// 최대 계란 수가 작으니까 모든 경우의 수를 확인해봐도 좋을 듯 -> 그래서 인가?
// 가장 왼쪽걸로 다른 모든 걸 쳐볼 수 있어야 함.
// 이 문제는 공식으로 쉽게 풀 수 있는 문제가 아닌 듯?

// 가장 왼쪽걸 잡고 다른 걸 전부 다 쳐보고 그 각각에서 또 자기를 제외한 것들을 쳐보고
// 이걸 전부해서 배열에 내구도가 0 인 계란이 가장 많은 값 리턴.
// 기본적으로 모든 걸 다 쳐볼 건데 거기서 내구도가 0인 계란은 잡을 수도 칠 수도 없음.
// arr랑 index를 받아야 할 듯?

// hit flag 세워서 아무것도 치지 못할 때를 제대로 대비했어야함. index -1 로 했었는데
// 이게 논리적으로 잘못 됨

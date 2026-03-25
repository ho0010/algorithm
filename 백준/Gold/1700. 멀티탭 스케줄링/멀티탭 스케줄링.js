let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let multitap = [];
let answer = 0;

for (let i = 0; i < M; i++) {
  let nowNum = arr[i];

  // 이미 꽂혀있음
  if (multitap.includes(nowNum)) continue;

  // 멀티탭에 빈자리가 있음
  if (multitap.length < N) {
    multitap.push(nowNum);
    continue;
  }

  // 하나 뽑아야 함.
  let target = -1;
  let maxFuture = -1;

  for (let device of multitap) {
    // 현재 이후로 이 기기를 언제 다시 쓰는지 탐색
    let nextUse = arr.indexOf(device, i + 1);

    // 앞으로 안쓰면 그냥 뽑으면 됨
    if (nextUse === -1) {
      target = device;
      break;
    }

    // 가장 나중에 쓰는 기기 찾기
    if (nextUse > maxFuture) {
      maxFuture = nextUse;
      target = device;
    }
  }
  // 멀티탭에서 타겟 빼고 새거 꽂음
  multitap = multitap.filter((device) => device !== target);
  multitap.push(nowNum);
  answer++;
}
console.log(answer);

// 일단 처음에는 멀티탭에 다 꼽긴 해야 함.
// 그 이후에는 더 가깝게 사용하는 것이 최대한 꽂혀 있어야 함
// 즉 하나를 뽑아야 한다면 앞으로 사용하지 않거나 가장 늦게 사용할 거를 뽑아야 한다.

// 하나씩 확인해서 공간이 있고 배열에 없으면 꽂는다.
// 배열에 있다? pass
// 공간이 없다? 여기서 시작..
// 지금 멀티탭에 있는 것 중에 앞으로 사용하지 않거나 -> 가장 늦게 사용할 거를 찾아야 함.
// 지금 인덱스 이후로 배열을 자른다음 indexOf 돌리면 가장 먼저 사용할게 나오니까 이거 이용하면 되지 않나?

// 최적화 방안은 나중에 생각해보자.

// 멀티탭에 있는거 분기처리 해서 꽂아 넣을거 생각하다 이거 좀 머리 아픈데? 싶어서 생각하다가 아래를 떠올림
// 뭔가 알았다.
// 이거 각 전기 용품마다 나오는 위치를 2차원 배열을 만들어서 미리 배열에 넣어두면?
// ㅈㄴ 이거 같은데

// 근데 이거 장점이 뭔데? 얼마나 뒤에 나오는지나 이후로 안나오는지를 빠르게 확인할 수 있다? 이거 크긴 하겠다.
// 기존 로직대로 짜보고 이거 도입해보자.

// 아니 이것도 좀 아닌 것 같아서 찾아보니.. ㄹㅈㄷ..
// 그런데 자바스크립트 indexOf에는 엄청난 기능이 숨어있습니다. 바로 두 번째 인자로 '검색 시작 위치'를 줄 수 있다는 점입니다!

// 까불지 말자..
// 근데 생각났는데 우야노

// JS 내장함수 이용하는 테크닉이 지리는데 이거..
// indexOf 두 번째 인자도 그렇고
// filter도 그렇고

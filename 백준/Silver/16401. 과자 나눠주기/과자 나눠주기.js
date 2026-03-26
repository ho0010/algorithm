let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let st = 0;
let en = Math.max(...arr);
let ans = 0;

while (st <= en) {
  // 나눠 줄 과자의 길이를 가정
  let mid = Math.floor((st + en) / 2);
  let count = 0;

  // mid로 잘랐을 때 몇 명에게 줄 수 있는지 계산
  for (let snack of arr) {
    if (snack >= mid) {
      count += Math.floor(snack / mid);
    }
  }
  // M 명에게 줄 수 있나?
  if (count >= N) {
    // 줄 수 있다면, 더 길게 줄 수 있는지 확인
    ans = mid;
    st = mid + 1;
  } else {
    // 줄 수 없다면, 길이 줄이기
    en = mid - 1;
  }
}

console.log(ans);
// 가장 큰 막대 과자를 기준으로 하나씩 줄여가며 줄 수 있는지 보면 됨 -> 근데 시간 복잡도가 터지잖아
// 그래서 저 서칭을 이분탐색으로? 이거 같긴하네

// 가장 큰 수로 해보고 되면 끝. 안되면 mid로 간다.
// 되는 지 기준은 그 수보다 작거나 같은 막대가 N개 이상 있는 것.
// 되는 수 중에 가장 큰 수를 찾는 것

// 이분 탐색 개념이 들어가긴 하는데 그거에 너무 갇히니까 답이 없음

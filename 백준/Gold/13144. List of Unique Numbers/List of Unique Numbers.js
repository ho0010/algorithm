let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let answer = 0;

let st = 0;
let en = 0;
let arrSet = new Set();

while (en < N) {
  // set에 있다.
  if (arrSet.has(arr[en])) {
    arrSet.delete(arr[st]);
    st++;
  }
  // set에 없다.
  else {
    arrSet.add(arr[en]);
    en++;
    answer += en - st;
  }
}
console.log(answer);

// 정렬은 No
// 모든 경우의 수를 확인?, 딱 투포인터긴하네
// 인덱스 0 부터 시작해서 하나씩 en을 늘려가며 가능하면 cnt++
// 안되면 st+1하고 en은 그대로 두고 cnt++; 이후로 또 en 늘려가면 됨
// st 랑 같이 가는 count 만들어서 그 안됐을 때 그거에 -1만큼 더하면 다시 en 안돌려도 됨

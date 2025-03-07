let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = [null];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

let visitedArr = new Array(N + 1).fill(false);
let finishedArr = new Array(N + 1).fill(false);
let cycleArr = [];
let result = [];

const dfs = (idx, startIdx, success) => {
  if (success.value) return;
  cycleArr.push(idx);
  visitedArr[idx] = true;

  let next = arr[idx];

  if (visitedArr[next]) {
    if (next === startIdx) {
      if (!finishedArr[next]) {
        result.push(...cycleArr);
        for (let k of cycleArr) {
          finishedArr[k] = true;
        }
        success.value = true;
      }
    }
  } else {
    dfs(next, startIdx, success);
  }

  visitedArr[idx] = false;
};

for (let i = 1; i <= N; i++) {
  if (!finishedArr[i]) {
    cycleArr = [];
    let success = { value: false };
    dfs(i, i, success);
  }
}

result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join('\n'));

// 개수가 최대일 경우의 수, output =  뽑힌 정수들의 개수, 작은수부터 큰수 순서로
// 단순히 생각하면 뽑힌 인덱스와 그 값의 배열이 일치하면 되는데 => 텀 프로젝트 문제에서 이렇게 했다가 메모리 초과 났음(즉, 효율적인 방식이 아님)

// target 인덱스로 사이클을 형성한다고 생각할 수 있을 것 같음
// 자기 자신을 가르키는 경우 또한 포함됨

// success 플래그 => 원시 값이 함수 인자로 전달되면 dfs내에서 변경해도 재귀 호출이 끝나면 false로 초기화됨

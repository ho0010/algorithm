let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let N = Number(input[0]);
let arr = [null];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

let visitedArr = new Array(N + 1).fill(false);
let finishedArr = new Array(N + 1).fill(false);
let cycleArr = [];

const dfs = (idx) => {
  cycleArr.push(idx);

  let next = arr[idx];

  if (visitedArr[next]) {
    if (!finishedArr[next]) {
      // 사이클 arr에 있는 idx들을 finishedArr에 삽입
      return finishedArr;
    } else {
      return 0;
    }
  }
  visitedArr[next] = true;

  dfs(next);
  visitedArr[idx] = false;
  // visitedArr 부분을 좀더 생각..
  // startIdx도 생각해야함
};

for (let i = 1; i <= N; i++) {
  cycleArr = [];
  visitedArr[i] = true;
  dfs(i);
}

// 개수가 최대일 경우의 수, output =  뽑힌 정수들의 개수, 작은수부터 큰수 순서로
// 단순히 생각하면 뽑힌 인덱스와 그 값의 배열이 일치하면 되는데 => 텀 프로젝트 문제에서 이렇게 했다가 메모리 초과 났음(즉, 효율적인 방식이 아님)

// target 인덱스로 사이클을 형성한다고 생각할 수 있을 것 같음
// 자기 자신을 가르키는 경우 또한 포함됨

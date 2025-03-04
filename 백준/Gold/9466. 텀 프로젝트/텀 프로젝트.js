// N
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let T = Number(input[0]);

const termProject = (studentArr, n) => {
  let visitedArr = new Array(n + 1).fill(false);
  let finishedArr = new Array(n + 1).fill(false);
  let count = 0;

  const dfs = (cur) => {
    visitedArr[cur] = true;
    let next = studentArr[cur];

    if (!visitedArr[next]) {
      dfs(next);
    } else if (!finishedArr[next]) {
      let temp = next;
      while (temp !== cur) {
        count++;
        temp = studentArr[temp];
      }
      count++;
    }

    finishedArr[cur] = true;
  };
  for (let i = 1; i <= n; i++) {
    if (!visitedArr[i]) {
      dfs(i);
    }
  }

  console.log(n - count);
};

for (let i = 1; i < T * 2; i += 2) {
  let n = Number(input[i]);
  let studentArr = [, ...input[i + 1].split(' ').map(Number)];

  termProject(studentArr, n);
}

// 어느 프로젝트 팀에도 속하지 않는 학생들의 수
// 처음 생각한 로직 => startIndex랑 targetIndex를 관리해서 두 배열이 같으면 사이클 형성으로 간주
// 위 로직의 문제점 => 사이클을 검출하는 방식이 옳지 못함

// 새로운 로직
// path에 curIdx의 값이 있으면 사이클이 생겼다고 간주함 => cycleStartIndex를 찾아서 지나온 값들을 삽입

// 메모리 초과
// 논리적으로는 문제가 없는데 DFS로 풀어야함.....

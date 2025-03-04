let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let T = Number(input[0]);

const termProject = (studentArr, n) => {
  let visitedArr = new Array(n + 1).fill(false);
  let finishedArr = new Array(n + 1).fill(false);
  let count = 0; // 팀을 이루는 학생 수

  const dfs = (cur) => {
    visitedArr[cur] = true;
    let next = studentArr[cur];

    if (!visitedArr[next]) {
      dfs(next);
    } else if (!finishedArr[next]) {
      // 사이클 발견
      let temp = next;
      while (temp !== cur) {
        count++;
        temp = studentArr[temp];
      }
      count++; // 자기 자신 포함
    }

    finishedArr[cur] = true;
  };

  for (let i = 1; i <= n; i++) {
    if (!visitedArr[i]) {
      dfs(i);
    }
  }

  console.log(n - count); // 팀을 이루지 못한 학생의 수
};

for (let i = 1; i < T * 2; i += 2) {
  let n = Number(input[i]);
  let studentArr = [, ...input[i + 1].split(' ').map(Number)];

  termProject(studentArr, n);
}

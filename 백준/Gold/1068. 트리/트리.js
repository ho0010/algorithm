let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let nodeArr = input[1].split(' ').map(Number);
let deletedNum = Number(input[2]);
let count = 0;

let listArr = Array.from({ length: N }, () => []);
let parentArr = Array(N).fill(-1); // 부모 노드 정보를 저장할 배열

// 🔹 인접 리스트 및 부모 정보 저장
for (let i = 0; i < N; i++) {
  let k = nodeArr[i];
  if (k !== -1) {
    listArr[k].push(i);
    parentArr[i] = k; // 부모 정보 저장
  }
}

// 🔹 DFS로 노드 삭제
const dfs = (index) => {
  if (listArr[index] === null) return;
  
  for (let child of listArr[index]) {
    dfs(child);
  }
  
  listArr[index] = null; // 노드 삭제를 확실히 하기 위해 null로 변경
};

dfs(deletedNum);

// 🔹 부모 노드에서 삭제된 노드 제거
if (parentArr[deletedNum] !== -1) {
  let parent = parentArr[deletedNum];
  listArr[parent] = listArr[parent].filter(child => child !== deletedNum);
}

// 🔹 리프 노드 개수 카운팅 (트리가 남아있는 경우)
for (let i = 0; i < N; i++) {
  if (listArr[i] !== null && listArr[i].length === 0) {
    count++;
  }
}

console.log(count);

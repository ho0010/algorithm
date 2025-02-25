let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let nodeArr = input[1].split(' ').map(Number);
let deletedNum = Number(input[2]);
let count = 0;

let listArr = Array.from({ length: N }, () => []);
let parentArr = Array(N).fill(-1); // 부모 노드 정보를 저장할 배열

// 인접 리스트 구성
// 0까지 고려해줘야함
for (let i = 0; i < N; i++) {
  let k = nodeArr[i];
  if (k !== -1) {
    listArr[k].push(i);
    parentArr[i] = k;
  }
}

// 노드 삭제 => index 받아서 index의 노드를 삭제하고 listArr[index]에 값이 있다면 다시 호출하는 식
// for of 이용해서 내용물이 있으면 dfs 돌려서 삭제하도록
const dfs = (index) => {
  if (listArr[index] === null) return;
  for (let child of listArr[index]) {
    dfs(child);
  }
  listArr[index] = null;
};

dfs(deletedNum);

if (parentArr[deletedNum] !== -1) {
  let parent = parentArr[deletedNum];
  listArr[parent] = listArr[parent].filter((child) => child !== deletedNum);
}

for (let i = 0; i < N; i++) {
  if (listArr[i] !== null && listArr[i].length === 0) {
    count++;
  }
}

console.log(count);
// 각 노드에서 가지고 있는 자식 노드를 인접 리스트로 관리하면 어떨까
// 주어진 정보를 바탕으로 인접 리스트 구성 => 예를 들어, 두 번째 값이 0을 가지고 있다면 0의 인접 리스트 값에 현재 인덱스 값을 삽입
// 노드 삭제 시에 삭제되는 노드의 자식 노드를 전부 삭제 => dfs?
// 자식 노드가 없는 노드의 수를 카운팅 => 인접리스트를 돌면서 확인

// 부모 노드에서 삭제된 자식을 제거하는 로직 필요 => 부모 노드 정보를 저장해 부모 노드에서 삭제된 노드 제거

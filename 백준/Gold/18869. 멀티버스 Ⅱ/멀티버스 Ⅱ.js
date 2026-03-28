let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let [M, N] = input[0].split(' ').map(Number);

let universeMap = new Map();

for (let i = 1; i <= M; i++) {
  const planets = input[i].split(' ').map(Number);

  // 좌표 압축 수행
  const sortedUnique = [...new Set(planets)].sort((a, b) => a - b);

  // 등수를 map에 저장
  const rankMap = new Map();
  sortedUnique.forEach((v, i) => {
    rankMap.set(v, i);
  });

  // 원본 배열을 등수로 변환 후 문자열로 만들기
  const compressedStr = planets.map((p) => rankMap.get(p)).join(',');

  // 변환된 문자열의 등장 횟수를 universeMap에 기록
  universeMap.set(compressedStr, (universeMap.get(compressedStr) || 0) + 1);
}

let answer = 0;

for (const count of universeMap.values()) {
  if (count >= 2) {
    answer += (count * (count - 1)) / 2;
  }
}

console.log(answer);

// 두 우주에 대해 n(n-1)/2 만큼의 비교가 필요. => n^2인데 우주 수를 생각하면 무조건 터짐
// 하나씩 전부 비교하지 않으려면 어떻게 해야 할까
// 행성 크기 순서대로 정렬할까? 근데 최대 만개임. 다 정렬시켜놓고 비교하는게 맞을까?
// sort를 잘 하면 정렬을 하면서 바로 쳐낼 수 있을까?

// 우주의 형태를 표준화 -> 상대적인 등수가 중요하다 -> 좌표 압축
// 좌표 압축 NlogN * M개의 우주 반복
// Map은 문자열 비교와 빈도수 측정에 유리

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

solution(
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola']
);
// 참가자에서 map 돌려서 완주자에 없는 요소 리턴
// 동명이인 생각해야 함
// 그럼 완주자에서 반복문을 돌리고 그 값을 participant에서 pop하고 participant의 남은 값을 반환 => 효율성 탈락
// sort하고 비교하면 되지 않나?
// 아니 var i = 0은 되고 let i = 0은 안되네 뭐지?
// functional scope와 block scope의 차이
// 무조건적으로 무엇이 빠르다는 아닌데 상황마다 다르다

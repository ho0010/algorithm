function solution(scoville, K) {
  var answer = 0;
  let breakPoint = true;

  while (breakPoint) {
    scoville.sort((a, b) => a - b);

    if (scoville.length == 1) {
      return -1;
    }

    for (let i = 0; i < scoville.length; i++) {
      if (scoville[i] < K) {
        break;
      }
      breakPoint = false;

      return answer;
    }

    let pushedNum = scoville[0] + 2 * scoville[1];

    scoville.splice(0, 2);

    scoville.unshift(pushedNum);
    scoville.sort((a, b) => a - b);

    answer++;
  }

  return answer;
}
solution([1, 2, 3, 9, 10, 12], 7);

// scoville 배열에 있는 모든 요소의 값이 k보다 크거나 같아야하는 조건을 만족시킬때까지 반복

// 배열을 오름차순으로 정렬해 => 문제의 방법으로 계산해 배열에 삽입

// 테케 2개가 틀리고
// 효율성 문제가 있음
// 최소 힙을 적용해야하는 것으로 보임..

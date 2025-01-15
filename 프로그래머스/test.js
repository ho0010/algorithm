function solution(citations) {
  var answer = 0;
  const maxNum = Math.max(...citations);

  for (let i = 1; i < maxNum; i++) {
    let count = 0;

    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) {
        count++;
      }
    }
    if (count >= i) {
      answer = i;
    }
  }

  return answer;
}

solution([3, 0, 6, 1, 5]);

// citations 배열에 있는 값 중 가장 큰 값까지 검사해야함
// 기본값을 0으로 주고 1부터 시작해서 조건을 만족하지 못하는 경우가 있을 때 멈추면 됨

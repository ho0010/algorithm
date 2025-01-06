function solution(prices) {
  var answer = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(count);
  }
  console.log(answer);
  return answer;
}

solution([1, 2, 3, 2, 3]);

// 각 요소에서는 배열의 남은 요소에서 자기보다 작은 값이 있는지 확인하는 기능
// 작은 값이 있다면 얼마나 떨어져있는지를 구하는 기능
// 없다면 남은 배열의 길이를 구하는 기능

// 구한 값을 return 배열에 삽입하는 기능

// 시작 18:10
// 끝 18:40

// 배열을 바꾸면서 바뀐 배열의 length를 참조하는 것은 의도대로 동작하지 않을 수 있음

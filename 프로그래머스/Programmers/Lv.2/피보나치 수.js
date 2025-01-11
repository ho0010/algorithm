function solution(n) {
  var answer = 0;
  let arr = [0, 1];

  for (i = 2; i < n + 1; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  answer = arr[n];
  console.log(answer);
  return answer;
}

// 0 1 1 2 3 5 8 13 21 34 55 89 144
// 반복문으로 배열에서 n번째 값 = (n-1) + (n-2)
// 마지막에만 1234567로 나누는 것이 아닌 모든 피보나치 수에 대해서 적용해야한다.

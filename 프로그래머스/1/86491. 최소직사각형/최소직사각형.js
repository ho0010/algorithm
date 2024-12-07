function solution(sizes) {
  var answer = 0;
  let firstMax = 0;
  let SecondMax = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (firstMax < Math.max(...sizes[i])) {
      firstMax = Math.max(...sizes[i]);
    }
    if (SecondMax < Math.min(...sizes[i])) {
      SecondMax = Math.min(...sizes[i]);
    }
  }

  answer = firstMax * SecondMax;
  return answer;
}
solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

// 먼저 각 배열 안에서 큰 수 들을 뽑아서 그 중에서 가장 큰 수를 뽑아냄 (즉, 가장 큰 수)
// 각 배열 안에서 작은 수들을 뽑아서 그 중에서 가장 큰 수를 뽑아냄
// 뽑아낸 두 값을 곱한다.

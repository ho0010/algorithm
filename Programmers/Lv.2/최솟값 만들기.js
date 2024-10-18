function solution(A, B) {
  var answer = 0;

  const sortedArrayA = A.sort((a, b) => a - b);
  const sortedArrayB = B.sort((a, b) => b - a);

  for (i = 0; i < A.length; i++) {
    let temp = sortedArrayA[i] * sortedArrayB[i];
    answer += temp;
  }

  return answer;
}

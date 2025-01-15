solution(123);
function solution(n) {
  var answer = 0;

  while (true) {
    answer += n % 10;
    n = Math.floor(n / 10);
    if (n < 1) {
      break;
    }
  }
  return answer;
}

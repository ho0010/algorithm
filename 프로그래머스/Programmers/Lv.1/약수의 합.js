solution(-1234);
function solution(s) {
  var answer = 0;
  const length = s.length;
  if (s[0] === "-") {
    answer = s.substr(1, length + 1);
    answer = -1 * Number(answer);
  } else {
    answer = Number(s);
  }

  return answer;
}

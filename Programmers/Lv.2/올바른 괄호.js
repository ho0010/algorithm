function solution(s) {
  var answer = true;
  let count = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === "(" && i === s.length - 1 && count != 0) return false;
    else if (s[i] === "(") {
      count++;
    } else if (s[i] === ")" && i === s.length - 1 && count === 1) return true;
    else if (s[i] === ")" && count <= 0) return false;
    else if (s[i] === ")") count--;
  }
  if (count != 0) answer = false;

  return answer;
}

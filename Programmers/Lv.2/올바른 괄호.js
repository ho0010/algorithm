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

//  cum += paren === '('? 1: -1 
// 삼항 연산자 생각은 했었는데 할당연산자까지 같이 적용할 생각을 못했네 
// JS니까 삼항 연산자를 적극사용하려고 노력하면 좋을듯

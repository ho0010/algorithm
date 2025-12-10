function solution(s) {
  var answer = "";

  function isUpperCase(char) {
    return char === char.toUpperCase();
  }

  const firstString = s[0];
  const changedFirstString = firstString.toUpperCase();

  answer = changedFirstString + s.slice(1);

  let answerArray = answer.split("");

  for (i = 1; i < s.length; i++) {
    if (s[i] == " " && i + 1 < s.length) {
      let temp = s[i + 1].toUpperCase();
      answerArray[i + 1] = temp;
    } else if (isUpperCase && s[i - 1] != " ") {
      answerArray[i] = s[i].toLowerCase();
    }
  }
  answer = answerArray.join("");
  console.log(answer);

  return answer;
}

// 54%

function solution(ingredient) {
  var answer = 0;

  const length = ingredient.length;

  for (i = 0; i < length - 3; i++) {
    if (
      ingredient[i] == 1 &&
      ingredient[i + 1] == 2 &&
      ingredient[i + 2] == 3 &&
      ingredient[i + 3] == 1
    ) {
      answer++;
      ingredient.splice(i, 4);
      i -= 4;
    }
  }

  return answer;
}

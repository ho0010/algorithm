solution([[1, 2]], [[3, 4]]);

function solution(arr1, arr2) {
  var answer = [[]];

  answer = arr2;
  const num = arr1[0].length;

  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < num; j++) {
      answer[i][j] += arr1[i][j];
    }
  }
  console.log(answer);
  return answer;
}

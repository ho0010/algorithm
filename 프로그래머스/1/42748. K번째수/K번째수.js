function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
    console.log(slicedArray);
    slicedArray.sort((a, b) => a - b);
    let index = commands[i][2];
    answer.push(slicedArray[index - 1]);
  }
  console.log(answer);
  return answer;
}
solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
